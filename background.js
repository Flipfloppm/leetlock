const bannedWebsites = ["x.com", "www.youtube.com"]
const blockedPage = browser.runtime.getURL("blocked.html")

browser.webRequest.onBeforeRequest.addListener(
    (details) => {
        const url = new URL(details.url)
        console.log(url.hostname)
        if (bannedWebsites.includes(url.hostname)) {
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

        const body = JSON.parse(new TextDecoder().decode(raw[0].bytes))
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
            console.log(`Solved: ${slug}`)

            browser.storage.local.get('completedToday').then(data => {
                const completed = data.completedToday || []
                if (!completed.includes(slug)) {
                    completed.push(slug)
                }
                browser.storage.local.set({ completedToday: completed })
            })
        })
    },
    { urls: ['*://leetcode.com/graphql*'], types: ['xmlhttprequest'] },
    ['requestBody']
)
