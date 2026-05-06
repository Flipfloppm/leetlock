document.getElementById('submit-btn').addEventListener('click', () => {
    const v = document.getElementById('my-input').value;
    browser.storage.local.set({ v });
    console.log('Submitted value:', v);
});

function logItem(item) {
    console.log(item)
}

document.getElementById('read-btn').addEventListener('click', () => {
    browser.storage.local.get("v").then(result => {
        console.log(result.v)
    });
});

/**const bannedWebsites = ["x.com"]

browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
    const url = new URL(tabs[0].url)
    console.log(url.hostname) // e.g. "youtube.com"
    if (bannedWebsites.includes(url.hostname)) {
        // force popup
    }
})*/
