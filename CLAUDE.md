# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**locked-in** is a Firefox WebExtension (Manifest V2) that blocks distracting websites until the user completes a LeetCode problem for the day.

## Loading and Testing

No build step — load the extension directly in Firefox:
1. Navigate to `about:debugging#/runtime/this-firefox`
2. Click "Load Temporary Add-on" and select `manifest.json`
3. Changes to JS files require reloading the extension from the same page; HTML/CSS changes may hot-reload

## Architecture

The extension has two main runtime contexts:

**`background.js`** — the persistent background script (service worker equivalent in MV2). All core logic lives here:
- Intercepts all `main_frame` requests and redirects to `blocked.html` if the hostname is in `bannedWebsites`
- Intercepts XHR requests to `leetcode.com/graphql`, re-fetches them with cookies, and parses `submissionDetails` responses — a `statusCode` of `10` indicates a successful submission
- Stores solved problem slugs in `browser.storage.local` under key `completedToday` (string array)

**`popup.html` / `popup.js`** — the browser action popup, currently minimal scaffolding. Reads/writes to `browser.storage.local` key `v`.

## Key Details

- Uses `browser.*` API (Firefox), not `chrome.*` — these are not interchangeable
- Manifest V2 is required for `webRequestBlocking` (synchronous request interception); migrating to MV3 would require switching to `declarativeNetRequest`, which changes how blocking works significantly
- The LeetCode detection works by intercepting the GraphQL request body (requires `requestBody` permission) and re-issuing it from the background context with `credentials: 'include'` to access the authenticated response
- The blocked page (`blocked.html`) is currently a stub — the intended UX is to show it when a banned site is visited before any LeetCode problem is solved that day; the logic to gate unblocking on `completedToday` is not yet wired up
