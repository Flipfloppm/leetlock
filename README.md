# locked-in

Stop doom scrolling! Disable websites until you've completed your LeetCode for the day.

Each day, the extension assigns problems from the NeetCode 150 weighted by difficulty (Easy = 1 pt, Medium = 2 pts, Hard = 3 pts) to hit a configurable daily point goal. Banned sites stay blocked until you hit the target.

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
