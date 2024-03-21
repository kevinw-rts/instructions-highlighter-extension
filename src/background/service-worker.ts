
chrome.action.onClicked.addListener((tab: chrome.tabs.Tab) => {
    
    sendChatWindow(tab);
})

function sendChatWindow(tab: chrome.tabs.Tab) {
    const msg = { type: "chatWindow" };
    
    chrome.tabs.sendMessage(tab.id ?? 0, msg);
}