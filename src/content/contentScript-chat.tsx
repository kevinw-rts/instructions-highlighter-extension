// import { createRoot } from "react-dom/client";
import App from "../react/chatThing/App";
import React from 'react'
import ReactDOM from 'react-dom/client'
import '../react/chatThing/index.css'

const chatInit = () => {
  let root = document.getElementById('chat-root')

  if (!root) {
    root = document.createElement('div')
    root.id = 'chat-root'
    root.classList.add('chatty-chat-chat')
    document.body.appendChild(root)
  }

  ReactDOM.createRoot(document.getElementById('chat-root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}



chrome.runtime.onMessage.addListener(
  function (msg, _sender, _sendResponse) {
    if (msg.type === "chatWindow") {
      chatInit()
    }
  });
