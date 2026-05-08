# locked-in

Stop doom scrolling! Disable websites until you've completed your LeetCode for the day.

Each day, the extension assigns problems from the NeetCode 150 weighted by difficulty (Easy = 1 pt, Medium = 2 pts, Hard = 3 pts) to hit a configurable daily point goal. Banned sites stay blocked until you hit the target.

## Development (temporary install)

No build step required. Load directly in Firefox:

1. Go to `about:debugging#/runtime/this-firefox`
2. Click **Load Temporary Add-on** and select `manifest.json`
3. JS changes require reloading the extension from that page; HTML/CSS changes may hot-reload

## Self-distribution (permanent install via signed .xpi)

Firefox requires extensions to be signed by Mozilla even for personal use. Self-distribution lets you get a signed `.xpi` without going through public review.

**1. Create an account at [addons.mozilla.org](https://addons.mozilla.org)**

**2. Zip the extension contents** (contents only, not the folder itself):

```bash
cd locked-in
zip -r ../leetlock.zip . -x "*.git*" -x "*.DS_Store"
```

**3. Submit for self-distribution**

- Go to [addons.mozilla.org/developers/addon/submit](https://addons.mozilla.org/developers/addon/submit)
- Choose **"On your own"** — this skips the public review queue
- Upload the zip
- Download the signed `.xpi` file

**4. Install the signed .xpi**

- Go to `about:addons`
- Click the gear icon → **Install Add-on From File**
- Select the `.xpi`
