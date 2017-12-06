chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  const title = document.getElementsByTagName('title')[0].innerText;
  sendResponse( {title: title} );
});