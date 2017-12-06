chrome.tabs.query({currentWindow: true, active:true}, (tabs) => {
  chrome.tabs.sendMessage(tabs[0].id, {text:'titleちょうだい'}, (res) => {
    document.getElementById('title').innerText = res.title;
  });
});
