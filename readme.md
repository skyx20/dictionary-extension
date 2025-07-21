# Dictionary extension

## A extension for chromium to search english words meanings in cambridge Dictionary

A lightweight dictionary Chrome extension built with React and TypeScript. It allows you to search for English words and get detailed definitions, phonetic, and pronunciation audios using a clean and accessible UI. The extension integrates with a custom FastAPI backend to fetch dictionary data dynamically.See it here [Dictionary Api](https://github.com/skyx20/cambridge_api).
This program uses WXT next-gen framework for quick development of browser extensions. Ideal for language learners, students, and anyone who wants quick access to word meanings without leaving their current tab.

### How to install

- clone the repo: `git clone https://github.com/skyx20/dictionary-extension.git`
- Open the folder in the terminal and install all dependencies: `npm i`
- Go to `web-ext.config.ts` and place the location for your web driver. Follows the wxt docs here [WXT Browser Startup ](https://wxt.dev/guide/essentials/config/browser-startup.html)

### How to run

- `npm run dev`

### How to build:

If you want to add it to your browser, follow the steps:

- `npm run build`
- go to "manage extensions" in your browser
- activate "developer mode"
- click on "load Unpacked"
- Search the path to '.output/chrome-mv3' (if you're using chrome) in the main folder.
- That's it. 😊
