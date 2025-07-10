import { defineWebExtConfig } from "wxt";

export default defineWebExtConfig({
  binaries: {
    chrome:
      "C:\\Users\\Diego\\Browsers\\Drivers\\chrome-win64-beta\\chrome.exe",

    // firefox: "firefoxdeveloperedition", // Use Firefox Developer Edition instead of regular Firefox
    // edge: "/path/to/edge", // Open MS Edge when running "wxt -b edge"
  },
});
