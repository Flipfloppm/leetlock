const NEETCODE_150 = [
  // Arrays & Hashing
  { title: "Contains Duplicate", slug: "contains-duplicate", difficulty: "easy" },
  { title: "Valid Anagram", slug: "valid-anagram", difficulty: "easy" },
  { title: "Two Sum", slug: "two-sum", difficulty: "easy" },
  { title: "Group Anagrams", slug: "group-anagrams", difficulty: "medium" },
  { title: "Top K Frequent Elements", slug: "top-k-frequent-elements", difficulty: "medium" },
  { title: "Encode and Decode Strings", slug: "encode-and-decode-strings", difficulty: "medium" },
  { title: "Product of Array Except Self", slug: "product-of-array-except-self", difficulty: "medium" },
  { title: "Valid Sudoku", slug: "valid-sudoku", difficulty: "medium" },
  { title: "Longest Consecutive Sequence", slug: "longest-consecutive-sequence", difficulty: "medium" },
  // Two Pointers
  { title: "Valid Palindrome", slug: "valid-palindrome", difficulty: "easy" },
  { title: "Two Sum II - Input Array Is Sorted", slug: "two-sum-ii-input-array-is-sorted", difficulty: "medium" },
  { title: "3Sum", slug: "3sum", difficulty: "medium" },
  { title: "Container With Most Water", slug: "container-with-most-water", difficulty: "medium" },
  { title: "Trapping Rain Water", slug: "trapping-rain-water", difficulty: "hard" },
  // Sliding Window
  { title: "Best Time to Buy and Sell Stock", slug: "best-time-to-buy-and-sell-stock", difficulty: "easy" },
  { title: "Longest Substring Without Repeating Characters", slug: "longest-substring-without-repeating-characters", difficulty: "medium" },
  { title: "Longest Repeating Character Replacement", slug: "longest-repeating-character-replacement", difficulty: "medium" },
  { title: "Permutation in String", slug: "permutation-in-string", difficulty: "medium" },
  { title: "Minimum Window Substring", slug: "minimum-window-substring", difficulty: "hard" },
  { title: "Sliding Window Maximum", slug: "sliding-window-maximum", difficulty: "hard" },
  // Stack
  { title: "Valid Parentheses", slug: "valid-parentheses", difficulty: "easy" },
  { title: "Min Stack", slug: "min-stack", difficulty: "medium" },
  { title: "Evaluate Reverse Polish Notation", slug: "evaluate-reverse-polish-notation", difficulty: "medium" },
  { title: "Generate Parentheses", slug: "generate-parentheses", difficulty: "medium" },
  { title: "Daily Temperatures", slug: "daily-temperatures", difficulty: "medium" },
  { title: "Car Fleet", slug: "car-fleet", difficulty: "medium" },
  { title: "Largest Rectangle in Histogram", slug: "largest-rectangle-in-histogram", difficulty: "hard" },
  // Binary Search
  { title: "Binary Search", slug: "binary-search", difficulty: "easy" },
  { title: "Search a 2D Matrix", slug: "search-a-2d-matrix", difficulty: "medium" },
  { title: "Koko Eating Bananas", slug: "koko-eating-bananas", difficulty: "medium" },
  { title: "Find Minimum in Rotated Sorted Array", slug: "find-minimum-in-rotated-sorted-array", difficulty: "medium" },
  { title: "Search in Rotated Sorted Array", slug: "search-in-rotated-sorted-array", difficulty: "medium" },
  { title: "Time Based Key-Value Store", slug: "time-based-key-value-store", difficulty: "medium" },
  { title: "Median of Two Sorted Arrays", slug: "median-of-two-sorted-arrays", difficulty: "hard" },
  // Linked List
  { title: "Reverse Linked List", slug: "reverse-linked-list", difficulty: "easy" },
  { title: "Merge Two Sorted Lists", slug: "merge-two-sorted-lists", difficulty: "easy" },
  { title: "Reorder List", slug: "reorder-list", difficulty: "medium" },
  { title: "Remove Nth Node From End of List", slug: "remove-nth-node-from-end-of-list", difficulty: "medium" },
  { title: "Copy List with Random Pointer", slug: "copy-list-with-random-pointer", difficulty: "medium" },
  { title: "Add Two Numbers", slug: "add-two-numbers", difficulty: "medium" },
  { title: "Linked List Cycle", slug: "linked-list-cycle", difficulty: "easy" },
  { title: "Find the Duplicate Number", slug: "find-the-duplicate-number", difficulty: "medium" },
  { title: "LRU Cache", slug: "lru-cache", difficulty: "medium" },
  { title: "Merge K Sorted Lists", slug: "merge-k-sorted-lists", difficulty: "hard" },
  { title: "Reverse Nodes in k-Group", slug: "reverse-nodes-in-k-group", difficulty: "hard" },
  // Trees
  { title: "Invert Binary Tree", slug: "invert-binary-tree", difficulty: "easy" },
  { title: "Maximum Depth of Binary Tree", slug: "maximum-depth-of-binary-tree", difficulty: "easy" },
  { title: "Diameter of Binary Tree", slug: "diameter-of-binary-tree", difficulty: "easy" },
  { title: "Balanced Binary Tree", slug: "balanced-binary-tree", difficulty: "easy" },
  { title: "Same Tree", slug: "same-tree", difficulty: "easy" },
  { title: "Subtree of Another Tree", slug: "subtree-of-another-tree", difficulty: "easy" },
  { title: "Lowest Common Ancestor of a Binary Search Tree", slug: "lowest-common-ancestor-of-a-binary-search-tree", difficulty: "medium" },
  { title: "Binary Tree Level Order Traversal", slug: "binary-tree-level-order-traversal", difficulty: "medium" },
  { title: "Binary Tree Right Side View", slug: "binary-tree-right-side-view", difficulty: "medium" },
  { title: "Count Good Nodes in Binary Tree", slug: "count-good-nodes-in-binary-tree", difficulty: "medium" },
  { title: "Validate Binary Search Tree", slug: "validate-binary-search-tree", difficulty: "medium" },
  { title: "Kth Smallest Element in a BST", slug: "kth-smallest-element-in-a-bst", difficulty: "medium" },
  { title: "Construct Binary Tree from Preorder and Inorder Traversal", slug: "construct-binary-tree-from-preorder-and-inorder-traversal", difficulty: "medium" },
  { title: "Binary Tree Maximum Path Sum", slug: "binary-tree-maximum-path-sum", difficulty: "hard" },
  { title: "Serialize and Deserialize Binary Tree", slug: "serialize-and-deserialize-binary-tree", difficulty: "hard" },
  // Tries
  { title: "Implement Trie (Prefix Tree)", slug: "implement-trie-prefix-tree", difficulty: "medium" },
  { title: "Design Add and Search Words Data Structure", slug: "design-add-and-search-words-data-structure", difficulty: "medium" },
  { title: "Word Search II", slug: "word-search-ii", difficulty: "hard" },
  // Heap / Priority Queue
  { title: "Kth Largest Element in a Stream", slug: "kth-largest-element-in-a-stream", difficulty: "easy" },
  { title: "Last Stone Weight", slug: "last-stone-weight", difficulty: "easy" },
  { title: "K Closest Points to Origin", slug: "k-closest-points-to-origin", difficulty: "medium" },
  { title: "Kth Largest Element in an Array", slug: "kth-largest-element-in-an-array", difficulty: "medium" },
  { title: "Task Scheduler", slug: "task-scheduler", difficulty: "medium" },
  { title: "Design Twitter", slug: "design-twitter", difficulty: "medium" },
  { title: "Find Median from Data Stream", slug: "find-median-from-data-stream", difficulty: "hard" },
  // Backtracking
  { title: "Subsets", slug: "subsets", difficulty: "medium" },
  { title: "Combination Sum", slug: "combination-sum", difficulty: "medium" },
  { title: "Permutations", slug: "permutations", difficulty: "medium" },
  { title: "Subsets II", slug: "subsets-ii", difficulty: "medium" },
  { title: "Combination Sum II", slug: "combination-sum-ii", difficulty: "medium" },
  { title: "Word Search", slug: "word-search", difficulty: "medium" },
  { title: "Palindrome Partitioning", slug: "palindrome-partitioning", difficulty: "medium" },
  { title: "Letter Combinations of a Phone Number", slug: "letter-combinations-of-a-phone-number", difficulty: "medium" },
  { title: "N-Queens", slug: "n-queens", difficulty: "hard" },
  // Graphs
  { title: "Number of Islands", slug: "number-of-islands", difficulty: "medium" },
  { title: "Clone Graph", slug: "clone-graph", difficulty: "medium" },
  { title: "Max Area of Island", slug: "max-area-of-island", difficulty: "medium" },
  { title: "Pacific Atlantic Water Flow", slug: "pacific-atlantic-water-flow", difficulty: "medium" },
  { title: "Surrounded Regions", slug: "surrounded-regions", difficulty: "medium" },
  { title: "Rotting Oranges", slug: "rotting-oranges", difficulty: "medium" },
  { title: "Walls and Gates", slug: "walls-and-gates", difficulty: "medium" },
  { title: "Course Schedule", slug: "course-schedule", difficulty: "medium" },
  { title: "Course Schedule II", slug: "course-schedule-ii", difficulty: "medium" },
  { title: "Redundant Connection", slug: "redundant-connection", difficulty: "medium" },
  { title: "Number of Connected Components in an Undirected Graph", slug: "number-of-connected-components-in-an-undirected-graph", difficulty: "medium" },
  { title: "Graph Valid Tree", slug: "graph-valid-tree", difficulty: "medium" },
  { title: "Word Ladder", slug: "word-ladder", difficulty: "hard" },
  // Advanced Graphs
  { title: "Reconstruct Itinerary", slug: "reconstruct-itinerary", difficulty: "hard" },
  { title: "Min Cost to Connect All Points", slug: "min-cost-to-connect-all-points", difficulty: "medium" },
  { title: "Network Delay Time", slug: "network-delay-time", difficulty: "medium" },
  { title: "Swim in Rising Water", slug: "swim-in-rising-water", difficulty: "hard" },
  { title: "Alien Dictionary", slug: "alien-dictionary", difficulty: "hard" },
  { title: "Cheapest Flights Within K Stops", slug: "cheapest-flights-within-k-stops", difficulty: "medium" },
  // 1D Dynamic Programming
  { title: "Climbing Stairs", slug: "climbing-stairs", difficulty: "easy" },
  { title: "Min Cost Climbing Stairs", slug: "min-cost-climbing-stairs", difficulty: "easy" },
  { title: "House Robber", slug: "house-robber", difficulty: "medium" },
  { title: "House Robber II", slug: "house-robber-ii", difficulty: "medium" },
  { title: "Longest Palindromic Substring", slug: "longest-palindromic-substring", difficulty: "medium" },
  { title: "Palindromic Substrings", slug: "palindromic-substrings", difficulty: "medium" },
  { title: "Decode Ways", slug: "decode-ways", difficulty: "medium" },
  { title: "Coin Change", slug: "coin-change", difficulty: "medium" },
  { title: "Maximum Product Subarray", slug: "maximum-product-subarray", difficulty: "medium" },
  { title: "Word Break", slug: "word-break", difficulty: "medium" },
  { title: "Longest Increasing Subsequence", slug: "longest-increasing-subsequence", difficulty: "medium" },
  { title: "Partition Equal Subset Sum", slug: "partition-equal-subset-sum", difficulty: "medium" },
  // 2D Dynamic Programming
  { title: "Unique Paths", slug: "unique-paths", difficulty: "medium" },
  { title: "Longest Common Subsequence", slug: "longest-common-subsequence", difficulty: "medium" },
  { title: "Best Time to Buy and Sell Stock with Cooldown", slug: "best-time-to-buy-and-sell-stock-with-cooldown", difficulty: "medium" },
  { title: "Coin Change II", slug: "coin-change-2", difficulty: "medium" },
  { title: "Target Sum", slug: "target-sum", difficulty: "medium" },
  { title: "Interleaving String", slug: "interleaving-string", difficulty: "hard" },
  { title: "Longest Increasing Path in a Matrix", slug: "longest-increasing-path-in-a-matrix", difficulty: "hard" },
  { title: "Distinct Subsequences", slug: "distinct-subsequences", difficulty: "hard" },
  { title: "Edit Distance", slug: "edit-distance", difficulty: "medium" },
  { title: "Burst Balloons", slug: "burst-balloons", difficulty: "hard" },
  { title: "Regular Expression Matching", slug: "regular-expression-matching", difficulty: "hard" },
  // Greedy
  { title: "Maximum Subarray", slug: "maximum-subarray", difficulty: "medium" },
  { title: "Jump Game", slug: "jump-game", difficulty: "medium" },
  { title: "Jump Game II", slug: "jump-game-ii", difficulty: "medium" },
  { title: "Gas Station", slug: "gas-station", difficulty: "medium" },
  { title: "Hand of Straights", slug: "hand-of-straights", difficulty: "medium" },
  { title: "Merge Triplets to Form Target Triplet", slug: "merge-triplets-to-form-target-triplet", difficulty: "medium" },
  { title: "Partition Labels", slug: "partition-labels", difficulty: "medium" },
  { title: "Valid Parenthesis String", slug: "valid-parenthesis-string", difficulty: "medium" },
  // Intervals
  { title: "Insert Interval", slug: "insert-interval", difficulty: "medium" },
  { title: "Merge Intervals", slug: "merge-intervals", difficulty: "medium" },
  { title: "Non-overlapping Intervals", slug: "non-overlapping-intervals", difficulty: "medium" },
  { title: "Meeting Rooms", slug: "meeting-rooms", difficulty: "easy" },
  { title: "Meeting Rooms II", slug: "meeting-rooms-ii", difficulty: "medium" },
  { title: "Minimum Interval to Include Each Query", slug: "minimum-interval-to-include-each-query", difficulty: "hard" },
  // Math & Geometry
  { title: "Rotate Image", slug: "rotate-image", difficulty: "medium" },
  { title: "Spiral Matrix", slug: "spiral-matrix", difficulty: "medium" },
  { title: "Set Matrix Zeroes", slug: "set-matrix-zeroes", difficulty: "medium" },
  { title: "Happy Number", slug: "happy-number", difficulty: "easy" },
  { title: "Plus One", slug: "plus-one", difficulty: "easy" },
  { title: "Pow(x, n)", slug: "powx-n", difficulty: "medium" },
  { title: "Multiply Strings", slug: "multiply-strings", difficulty: "medium" },
  { title: "Detect Squares", slug: "detect-squares", difficulty: "medium" },
  // Bit Manipulation
  { title: "Single Number", slug: "single-number", difficulty: "easy" },
  { title: "Number of 1 Bits", slug: "number-of-1-bits", difficulty: "easy" },
  { title: "Counting Bits", slug: "counting-bits", difficulty: "easy" },
  { title: "Reverse Bits", slug: "reverse-bits", difficulty: "easy" },
  { title: "Missing Number", slug: "missing-number", difficulty: "easy" },
  { title: "Sum of Two Integers", slug: "sum-of-two-integers", difficulty: "medium" },
  { title: "Reverse Integer", slug: "reverse-integer", difficulty: "medium" },
]

const blockedPageBase = browser.runtime.getURL("blocked.html")

let bannedWebsites = []

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
})

browser.runtime.onMessage.addListener(message => {
  if (message?.type === 'reset-progress') {
    initDailyState()
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

async function initDailyState() {
  const today = getTodayStr()
  const data = await browser.storage.local.get([
    'todayDate',
    'todayProblems',
    'completedToday',
    'allCompleted',
    'pointTarget',
    'streakCount',
    'streakLastCompletedDate',
  ])
  streakState = {
    count: data.streakCount || 0,
    lastCompletedDate: data.streakLastCompletedDate || null,
  }
  if (data.todayDate !== today) {
    const target = data.pointTarget || 3
    const doneSlugs = new Set((data.allCompleted || []).map(p => p.slug))
    const firstPassRemaining = NEETCODE_150.filter(p => !doneSlugs.has(p.slug))

    let pool
    let cycleRemaining = null

    if (firstPassRemaining.length > 0) {
      pool = firstPassRemaining
    } else {
      // All 150 done — use cycleRemaining to avoid repeats within a cycle
      cycleRemaining = data.cycleRemaining || []
      if (cycleRemaining.length === 0) cycleRemaining = NEETCODE_150.map(p => p.slug)
      pool = NEETCODE_150.filter(p => cycleRemaining.includes(p.slug))
    }

    const problems = pickProblems(pool, target)
    dailyState = { date: today, problems, completed: [] }

    const updates = { todayDate: today, todayProblems: problems, completedToday: [] }
    if (cycleRemaining !== null) {
      const picked = new Set(problems.map(p => p.slug))
      updates.cycleRemaining = cycleRemaining.filter(s => !picked.has(s))
    }
    await browser.storage.local.set(updates)
  } else {
    dailyState = {
      date: today,
      problems: data.todayProblems || [],
      completed: data.completedToday || [],
    }
  }

  if (dailyState.date === today && isUnlocked()) {
    await updateStreakIfNeeded(today)
  }
}

function isUnlocked() {
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
  const neetcodeProblem = NEETCODE_150.find(p => p.slug === slug)
  if (!neetcodeProblem) return

  // Update today's progress if it's an assigned problem
  const assignedProblem = dailyState.problems.find(p => p.slug === slug)
  if (assignedProblem && !dailyState.completed.includes(slug)) {
    dailyState.completed.push(slug)
    browser.storage.local.set({ completedToday: dailyState.completed })
    console.log(`Solved today's problem: ${slug} (${dailyState.completed.length}/${dailyState.problems.length})`)
    if (isUnlocked()) {
      updateStreakIfNeeded(dailyState.date)
    }
  }

  // Always persist to lifetime history
  browser.storage.local.get('allCompleted').then(data => {
    const all = data.allCompleted || []
    if (!all.find(p => p.slug === slug)) {
      all.push({ title: neetcodeProblem.title, slug, difficulty: neetcodeProblem.difficulty })
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
