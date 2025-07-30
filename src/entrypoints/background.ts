import { onMessage } from "webext-bridge/background";
// type dataFetch = {
//   word: string;
//   dictVariant: string;
// };
// type dataFetch = {
//   word: string;
//   dictVariant: string;
// };
//
// };
// };
// };

export default defineBackground(() => {
  const API_ENDPOINT = "http://127.0.0.1:8000/search";

  browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("sender", sender);
    if (message.type === "getWord") {
      (async () => {
        try {
          const r = await fetch(
            `${API_ENDPOINT}/${message.message.word}/${message.message.variant}`
          );

          if (!r.ok) {
            const errorMessage = await r.json();
            sendResponse(errorMessage);
            // throw new Error(r.statusText);
          }

          const data = await r.json();
          sendResponse(data);
        } catch (e) {
          console.error("Fetch error:", e);
        }
      })();

      // Must return true to indicate you'll respond asynchronously
      return true;
    }
  });
});
