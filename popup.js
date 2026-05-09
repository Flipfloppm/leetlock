const DIFF_LABEL = { easy: 'Easy', medium: 'Med', hard: 'Hard' }
const MIN_PTS = 1
const MAX_PTS = 9

function diffBadge(difficulty) {
  if (!difficulty) return ''
  return `<span class="diff diff-${difficulty}">${DIFF_LABEL[difficulty]}</span>`
}

function streakIcon(allDone) {
  return allDone ? '🔥' : '🪵'
}

function render(problems, completed, all) {
  const solved = problems.filter(p => completed.includes(p.slug)).length
  const allDone = problems.length > 0 && solved === problems.length

  const badge = document.getElementById('badge')
  badge.textContent = allDone ? 'unlocked' : 'locked'
  badge.className = 'badge ' + (allDone ? 'unlocked' : 'locked')

  const problemsEl = document.getElementById('problems')
  problemsEl.innerHTML = ''
  problems.forEach(problem => {
    const done = completed.includes(problem.slug)
    const div = document.createElement('div')
    div.className = 'problem' + (done ? ' solved' : '')
    div.innerHTML =
      `<span class="icon">${done ? '✓' : '○'}</span>` +
      `<div class="info">` +
        `<div class="title">${problem.title} ${diffBadge(problem.difficulty)}</div>` +
        `<a class="link" href="https://leetcode.com/problems/${problem.slug}/" target="_blank">Open on LeetCode ↗</a>` +
      `</div>`
    problemsEl.appendChild(div)
  })

  document.getElementById('progress').textContent = `${solved} / ${problems.length} solved today`
  document.getElementById('hist-header').textContent = `History (${all.length} / 150)`

  const histEl = document.getElementById('history')
  histEl.innerHTML = ''
  if (all.length === 0) {
    histEl.innerHTML = '<div class="hist-empty">None yet</div>'
  } else {
    all.slice().reverse().forEach(problem => {
      const div = document.createElement('div')
      div.className = 'hist-item'
      div.innerHTML =
        `<span>✓</span>` +
        `<a href="https://leetcode.com/problems/${problem.slug}/" target="_blank">${problem.title}</a>` +
        diffBadge(problem.difficulty) +
        `<button class="remove-btn" data-slug="${problem.slug}" title="Unmark as done">×</button>`
      histEl.appendChild(div)
    })
  }
}

function loadAndRender() {
  browser.storage.local.get(['todayProblems', 'completedToday', 'allCompleted', 'streakCount']).then(data => {
    const problems = data.todayProblems || []
    const completed = data.completedToday || []
    const all = data.allCompleted || []
    const solved = problems.filter(p => completed.includes(p.slug)).length
    const allDone = problems.length > 0 && solved === problems.length

    render(problems, completed, all)
    document.getElementById('streak').textContent = `${streakIcon(allDone)} ${data.streakCount || 0} day streak`
  })
}

loadAndRender()

browser.storage.onChanged.addListener(() => {
  loadAndRender()
})

// ── Settings toggle ──────────────────────────────────────────────────────────
const settingsToggle = document.getElementById('settings-toggle')
const mainView = document.getElementById('main-view')
const settingsView = document.getElementById('settings-view')

settingsToggle.addEventListener('click', () => {
  const openingSettings = mainView.classList.toggle('hidden')
  settingsView.classList.toggle('hidden', !openingSettings)
  settingsToggle.textContent = openingSettings ? '✕' : '⚙'
})

// ── Point target adjuster ────────────────────────────────────────────────────
let pointTarget = 3

function updatePtsDisplay() {
  document.getElementById('pts-display').textContent = `${pointTarget} pts`
  document.getElementById('pts-dec').disabled = pointTarget <= MIN_PTS
  document.getElementById('pts-inc').disabled = pointTarget >= MAX_PTS
}

browser.storage.local.get('pointTarget').then(data => {
  pointTarget = data.pointTarget || 3
  updatePtsDisplay()
})

document.getElementById('pts-dec').addEventListener('click', () => {
  if (pointTarget <= MIN_PTS) return
  pointTarget--
  updatePtsDisplay()
  browser.storage.local.set({ pointTarget })
})

document.getElementById('pts-inc').addEventListener('click', () => {
  if (pointTarget >= MAX_PTS) return
  pointTarget++
  updatePtsDisplay()
  browser.storage.local.set({ pointTarget })
})

// ── Unmark individual problem ────────────────────────────────────────────────
document.getElementById('history').addEventListener('click', e => {
  const btn = e.target.closest('.remove-btn')
  if (!btn) return
  browser.storage.local.get('allCompleted').then(data => {
    const all = (data.allCompleted || []).filter(p => p.slug !== btn.dataset.slug)
    browser.storage.local.set({ allCompleted: all }).then(loadAndRender)
  })
})

// ── Blocked sites ────────────────────────────────────────────────────────────
function renderUrlList(urls) {
  const listEl = document.getElementById('url-list')
  listEl.innerHTML = ''
  if (urls.length === 0) {
    listEl.innerHTML = '<div class="url-empty">No sites blocked</div>'
    return
  }
  urls.forEach(url => {
    const div = document.createElement('div')
    div.className = 'url-item'
    div.innerHTML = `<span>${url}</span><button class="url-remove" data-url="${url}">×</button>`
    listEl.appendChild(div)
  })
}

browser.storage.local.get('bannedWebsites').then(data => {
  renderUrlList(data.bannedWebsites || [])
})

function addUrl() {
  const input = document.getElementById('url-input')
  const raw = input.value.trim()
  if (!raw) return
  let hostname
  try {
    hostname = new URL(raw.includes('://') ? raw : 'https://' + raw).hostname
  } catch { return }
  if (!hostname) return
  input.value = ''
  browser.storage.local.get('bannedWebsites').then(data => {
    const urls = data.bannedWebsites || []
    if (urls.includes(hostname)) return
    urls.push(hostname)
    browser.storage.local.set({ bannedWebsites: urls }).then(() => renderUrlList(urls))
  })
}

document.getElementById('url-add').addEventListener('click', addUrl)
document.getElementById('url-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') addUrl()
})

document.getElementById('url-list').addEventListener('click', e => {
  const btn = e.target.closest('.url-remove')
  if (!btn) return
  browser.storage.local.get('bannedWebsites').then(data => {
    const urls = (data.bannedWebsites || []).filter(u => u !== btn.dataset.url)
    browser.storage.local.set({ bannedWebsites: urls }).then(() => renderUrlList(urls))
  })
})

// ── Reset all progress (two-step confirmation) ───────────────────────────────
let resetPending = false
let resetTimer = null
const resetBtn = document.getElementById('reset-btn')

resetBtn.addEventListener('click', () => {
  if (!resetPending) {
    resetPending = true
    resetBtn.textContent = 'Tap again to confirm'
    resetBtn.classList.add('confirm')
    resetTimer = setTimeout(() => {
      resetPending = false
      resetBtn.textContent = 'Reset all progress'
      resetBtn.classList.remove('confirm')
    }, 3000)
  } else {
    clearTimeout(resetTimer)
    resetPending = false
    resetBtn.textContent = 'Reset all progress'
    resetBtn.classList.remove('confirm')
    browser.storage.local.set({
      allCompleted: [],
      completedToday: [],
      todayDate: null,
      todayProblems: [],
      cycleRemaining: [],
      streakCount: 0,
      streakLastCompletedDate: null,
    }).then(() => browser.runtime.sendMessage({ type: 'reset-progress' }))
      .then(loadAndRender)
  }
})
