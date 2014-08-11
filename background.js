chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
      if (request.greeting == "hello")
    sendResponse({farewell: "goodbye"});
});