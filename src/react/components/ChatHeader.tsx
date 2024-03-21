// import { GlobeAmericasIcon, XMarkIcon } from '@heroicons/react/16/solid'

interface Props {
  onClose: () => void
}

function ChatHeader({ onClose }: Props) {
  return (
    <div id="chat-header" className="flex justify-between py-4 pl-4 pr-3 bg-teal-500 rounded-t-lg">
      <div className="flex gap-1 items-center">
        {/* <GlobeAmericasIcon className="w-6 h-6 text-white" /> */}
        <p className="text-white">Chat</p>
      </div>
      <button onClick={onClose}>
        {/* <XMarkIcon className="w-6 h-6 text-white hover:bg-teal-400 rounded transition" /> */}
      </button>
    </div>
  )
}

export default ChatHeader
