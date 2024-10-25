document.getElementById("fetchTitle").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  console.log(tab.url);
  
  document.getElementById("titleDisplay").textContent = tab.title;
});
