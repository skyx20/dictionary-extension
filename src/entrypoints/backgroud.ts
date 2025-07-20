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
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("HIIIIIII");
});

export default defineBackground(() => {
  console.log("background loaded");
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("messege Receive");
  });
});

// export default defineBackground(() => {
//   chrome.runtime.onMessage.addEventListener(async (message) => {
//     console.log("words, communicating in background", message);
//   if (request.action === "fetchData") {
//     try {
//       const r = await fetch(
//         `http://127.0.0.1:8000/search/${word}/${dictVariant}`
//       );
//       if (!r.ok) {
//         throw new Error(`HTTP error, status:${r.status}`);
//       }
//       const data = await r.json();
//       sendResponse({ status: "success", payload: data });
//       return true;
//     } catch (e) {
//       console.log(e);
//     }
//   }
//     return true;
//   });
// });
