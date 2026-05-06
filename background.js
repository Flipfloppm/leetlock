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
