import { defineWebExtConfig } from "wxt";

export default defineWebExtConfig({
  binaries: {
    chrome: import.meta.env.CHROME,

    // firefox: "firefoxdeveloperedition", // Use Firefox Developer Edition instead of regular Firefox
    // edge: "/path/to/edge", // Open MS Edge when running "wxt -b edge"
  },
});
