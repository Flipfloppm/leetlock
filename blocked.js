const params = new URLSearchParams(window.location.search)
const from = params.get('from')

function render(problems, completed) {
  const solved = problems.filter(p => completed.includes(p.slug)).length
  const allDone = problems.length > 0 && solved === problems.length

  const problemsEl = document.getElementById('problems')
  problemsEl.innerHTML = ''
  problems.forEach(problem => {
    const done = completed.includes(problem.slug)
    const div = document.createElement('div')
    div.className = 'problem' + (done ? ' solved' : '')
    div.innerHTML =
      `<span class="icon">${done ? '✓' : '○'}</span>` +
      `<div class="info">` +
        `<div class="title">${problem.title}</div>` +
        `<a class="link" href="https://leetcode.com/problems/${problem.slug}/" target="_blank">Open on LeetCode ↗</a>` +
      `</div>`
    problemsEl.appendChild(div)
  })

  document.getElementById('progress').textContent = `${solved} / ${problems.length} solved`

  const btn = document.getElementById('continue')
  btn.disabled = !allDone
  if (allDone) {
    btn.onclick = () => { window.location.href = from || 'about:newtab' }
  }
}

browser.storage.local.get(['todayProblems', 'completedToday']).then(data => {
  render(data.todayProblems || [], data.completedToday || [])
})

// Live-update when a problem is solved while this page is open
browser.storage.onChanged.addListener(() => {
  browser.storage.local.get(['todayProblems', 'completedToday']).then(data => {
    render(data.todayProblems || [], data.completedToday || [])
  })
})
