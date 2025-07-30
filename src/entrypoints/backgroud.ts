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
  browser.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    console.log("HIIIIIII");
  });
});
