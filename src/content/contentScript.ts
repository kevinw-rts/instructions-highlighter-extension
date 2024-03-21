chrome.runtime.onMessage.addListener(
    function (msg, sender, sendResponse) {
        console.log(sender);
        console.log(sendResponse);
        
        const dogImg: HTMLImageElement = document.createElement('img');
        dogImg.src = msg;
        document.body.appendChild(dogImg);
    }
);