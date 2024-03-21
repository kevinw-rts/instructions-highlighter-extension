// import { ChatBubbleLeftRightIcon } from '@heroicons/16/solid'

interface Props {
  isShown: boolean
  onClick: () => void
}

const ChatFab = ({ isShown, onClick }: Props) => {
  return (
    <button
      id="chat-fab"
      onClick={onClick}
      className={`absolute bottom-6 right-6 md:bottom-0 md:right-0 p-4 bg-teal-500 rounded-full shadow-xl text-white z-50 hover:-translate-y-1 hover:bg-teal-600 transition duration-300 ${
        isShown ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'
      }`}
    >
      <div className="sr-only">Toggle chat window</div>
      {/* <ChatBubbleLeftRightIcon className="w-6 h-6" /> */}
    </button>
  )
}

export default ChatFab
