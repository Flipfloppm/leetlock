# leetlock

Stop doom scrolling! Disable websites until you've completed your LeetCode for the day.

Each day, the extension assigns problems from the NeetCode 150 weighted by difficulty (Easy = 1 pt, Medium = 2 pts, Hard = 3 pts) to hit a configurable daily point goal. Banned sites stay blocked until you hit the target.

<img width="344" height="376" alt="image" src="https://github.com/user-attachments/assets/b827c6d6-8551-413c-8fb4-7120b12d3a79" />
<img width="781" height="512" alt="Screenshot 2026-05-08 at 1 00 47 AM" src="https://github.com/user-attachments/assets/3b8a8925-fd92-4885-9f37-62cfbfa9c304" />


## Installation

1. Go to the [Releases](../../releases) page and download the latest `.xpi` file
2. In Firefox, go to `about:addons`
3. Click the gear icon → **Install Add-on From File**
4. Select the downloaded `.xpi`

## Development

No build step required. Load directly in Firefox:

1. Go to `about:debugging#/runtime/this-firefox`
2. Click **Load Temporary Add-on** and select `manifest.json`
3. JS changes require reloading the extension from that page; HTML/CSS changes may hot-reload
