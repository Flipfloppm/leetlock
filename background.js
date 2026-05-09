// NC_150, BLIND_75, PROBLEM_SETS, PROBLEM_ALL_MAP are defined in problems.js

const blockedPageBase = browser.runtime.getURL("blocked.html")

let bannedWebsites = []
let activeSet = 'nc150'
let wasUnlockedToday = false

async function loadBannedWebsites() {
  const data = await browser.storage.local.get('bannedWebsites')
  if (data.bannedWebsites === undefined) {
    bannedWebsites = ['x.com', 'youtube.com']
    await browser.storage.local.set({ bannedWebsites })
  } else {
    bannedWebsites = data.bannedWebsites
  }
}

function isHostnameBanned(hostname) {
  return bannedWebsites.some(banned =>
    hostname === banned || hostname.endsWith('.' + banned)
  )
}

browser.storage.onChanged.addListener(changes => {
  if (changes.bannedWebsites) bannedWebsites = changes.bannedWebsites.newValue || []
  if (changes.customSet) PROBLEM_SETS.custom.problems = changes.customSet.newValue || []
  if (changes.activeSet) {
    activeSet = changes.activeSet.newValue || 'nc150'
    initDailyState()
  }
})

async function fetchProblem(slug) {
  const resp = await fetch('https://leetcode.com/graphql', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: 'query($s:String!){question(titleSlug:$s){title difficulty}}',
      variables: { s: slug },
    }),
  })
  if (!resp.ok) throw new Error('Network error')
  const json = await resp.json()
  const q = json?.data?.question
  if (!q?.title) throw new Error('Problem not found')
  return { title: q.title, slug, difficulty: q.difficulty.toLowerCase() }
}

browser.runtime.onMessage.addListener(message => {
  if (message?.type === 'reset-progress') {
    initDailyState()
    return
  }
  if (message?.type === 'fetch-problem') {
    return fetchProblem(message.slug)
  }
})

let dailyState = { date: null, problems: [], completed: [] }
let streakState = { count: 0, lastCompletedDate: null }

function getTodayStr() {
  return new Date().toLocaleDateString('en-CA')
}

function shiftLocalDate(dateStr, deltaDays) {
  const [year, month, day] = dateStr.split('-').map(Number)
  const date = new Date(year, month - 1, day)
  date.setDate(date.getDate() + deltaDays)
  return date.toLocaleDateString('en-CA')
}

function sampleN(arr, n) {
  return [...arr].sort(() => Math.random() - 0.5).slice(0, n)
}

// Enumerate all {e, m, h} combos where 1*e + 2*m + 3*h === target,
// filtered to only those achievable from the available pool counts.
function pickProblems(pool, target) {
  const easy = pool.filter(p => p.difficulty === 'easy')
  const medium = pool.filter(p => p.difficulty === 'medium')
  const hard = pool.filter(p => p.difficulty === 'hard')

  for (let t = target; t >= 1; t--) {
    const combos = []
    for (let h = 0; h <= Math.floor(t / 3); h++) {
      for (let m = 0; m <= Math.floor((t - 3 * h) / 2); m++) {
        const e = t - 3 * h - 2 * m
        if (easy.length >= e && medium.length >= m && hard.length >= h) {
          combos.push({ e, m, h })
        }
      }
    }
    if (combos.length > 0) {
      const { e, m, h } = combos[Math.floor(Math.random() * combos.length)]
      return [...sampleN(easy, e), ...sampleN(medium, m), ...sampleN(hard, h)]
    }
  }
  return []
}

function generateProblems(setProblems, cycleKey, data, target) {
  const doneSlugs = new Set((data.allCompleted || []).map(p => p.slug))
  const firstPassRemaining = setProblems.filter(p => !doneSlugs.has(p.slug))

  let pool, cycleRemaining = null

  if (firstPassRemaining.length > 0) {
    pool = firstPassRemaining
  } else {
    cycleRemaining = data[cycleKey] || []
    if (cycleRemaining.length === 0) cycleRemaining = setProblems.map(p => p.slug)
    pool = setProblems.filter(p => cycleRemaining.includes(p.slug))
  }

  return { problems: pickProblems(pool, target), cycleRemaining }
}

async function initDailyState() {
  const today = getTodayStr()
  const data = await browser.storage.local.get([
    'todayDate', 'allCompleted', 'pointTarget',
    'streakCount', 'streakLastCompletedDate',
    'activeSet', 'unlockedToday',
    'customSet',
    'cycleRemaining_blind75', 'cycleRemaining_nc150', 'cycleRemaining_custom',
    'todayProblems_blind75', 'completedToday_blind75',
    'todayProblems_nc150', 'completedToday_nc150',
    'todayProblems_custom', 'completedToday_custom',
  ])
  activeSet = data.activeSet || 'nc150'
  PROBLEM_SETS.custom.problems = data.customSet || []
  const setProblems = PROBLEM_SETS[activeSet]?.problems || PROBLEM_SETS.nc150.problems
  const cycleKey = `cycleRemaining_${activeSet}`
  const setProblemsKey = `todayProblems_${activeSet}`
  const setCompletedKey = `completedToday_${activeSet}`

  streakState = {
    count: data.streakCount || 0,
    lastCompletedDate: data.streakLastCompletedDate || null,
  }

  const newDay = data.todayDate !== today
  const setHasProblems = (data[setProblemsKey] || []).length > 0

  if (!newDay && setHasProblems) {
    // Same day, this set's problems already generated — restore without regenerating
    wasUnlockedToday = data.unlockedToday || false
    const problems = data[setProblemsKey]
    const completed = data[setCompletedKey] || []
    dailyState = { date: today, problems, completed }
    // Mirror to todayProblems/completedToday so popup and blocked.html see the right set
    await browser.storage.local.set({ todayProblems: problems, completedToday: completed })
  } else {
    // New day OR first visit to this set today — generate problems once and store them
    if (newDay) wasUnlockedToday = false
    else wasUnlockedToday = data.unlockedToday || false

    const target = data.pointTarget || 3
    const { problems, cycleRemaining } = generateProblems(setProblems, cycleKey, data, target)
    dailyState = { date: today, problems, completed: [] }

    const updates = {
      todayProblems: problems,
      completedToday: [],
      [setProblemsKey]: problems,
      [setCompletedKey]: [],
    }
    if (newDay) {
      updates.todayDate = today
      updates.unlockedToday = false
      // Clear other sets' stale per-day assignments
      for (const key of Object.keys(PROBLEM_SETS)) {
        if (key !== activeSet) {
          updates[`todayProblems_${key}`] = null
          updates[`completedToday_${key}`] = null
        }
      }
    }
    if (cycleRemaining !== null) {
      const picked = new Set(problems.map(p => p.slug))
      updates[cycleKey] = cycleRemaining.filter(s => !picked.has(s))
    }
    await browser.storage.local.set(updates)
  }

  if (dailyState.date === today && isUnlocked()) {
    await updateStreakIfNeeded(today)
  }
}

function isUnlocked() {
  if (wasUnlockedToday) return true
  return dailyState.problems.length > 0 &&
    dailyState.problems.every(p => dailyState.completed.includes(p.slug))
}

async function updateStreakIfNeeded(today) {
  if (streakState.lastCompletedDate === today) return

  const yesterdayStr = shiftLocalDate(today, -1)

  streakState.count = streakState.lastCompletedDate === yesterdayStr ? streakState.count + 1 : 1
  streakState.lastCompletedDate = today

  await browser.storage.local.set({
    streakCount: streakState.count,
    streakLastCompletedDate: streakState.lastCompletedDate,
  })
}

function recordSolved(slug) {
  const problem = PROBLEM_ALL_MAP.get(slug) || PROBLEM_SETS.custom.problems.find(p => p.slug === slug)
  if (!problem) return

  const assignedProblem = dailyState.problems.find(p => p.slug === slug)
  if (assignedProblem && !dailyState.completed.includes(slug)) {
    dailyState.completed.push(slug)
    browser.storage.local.set({
      completedToday: dailyState.completed,
      [`completedToday_${activeSet}`]: dailyState.completed,
    })
    if (isUnlocked()) {
      wasUnlockedToday = true
      browser.storage.local.set({ unlockedToday: true })
      updateStreakIfNeeded(dailyState.date)
    }
  }

  browser.storage.local.get('allCompleted').then(data => {
    const all = data.allCompleted || []
    if (!all.find(p => p.slug === slug)) {
      all.push({ title: problem.title, slug, difficulty: problem.difficulty })
      browser.storage.local.set({ allCompleted: all })
    }
  })
}

loadBannedWebsites()
initDailyState()

browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    const today = getTodayStr()
    if (dailyState.date !== today) {
      initDailyState()
    }
    const url = new URL(details.url)
    if (isHostnameBanned(url.hostname) && !isUnlocked()) {
      const blockedPage = blockedPageBase + '?from=' + encodeURIComponent(details.url)
      return { redirectUrl: blockedPage }
    }
    return {}
  },
  { urls: ["<all_urls>"], types: ["main_frame"] },
  ["blocking"]
)

browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    if (details.originUrl?.startsWith('moz-extension://')) return
    if (!details.requestBody) return
    const raw = details.requestBody.raw
    if (!raw) return
    let body
    try {
      body = JSON.parse(new TextDecoder().decode(raw[0].bytes))
    } catch {
      return
    }
    if (!body?.query?.includes('submissionDetails')) return

    fetch('https://leetcode.com/graphql', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    .then(r => r.json())
    .then(json => {
      const submission = json?.data?.submissionDetails
      if (!submission) return
      if (submission.statusCode !== 10) return
      const slug = submission.question.titleSlug

      const today = getTodayStr()
      if (dailyState.date !== today) {
        initDailyState().then(() => recordSolved(slug))
      } else {
        recordSolved(slug)
      }
    })
  },
  { urls: ['*://leetcode.com/graphql*'], types: ['xmlhttprequest'] },
  ['requestBody']
)
