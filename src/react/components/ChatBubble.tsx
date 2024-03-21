import ChatMessage from '../types/ChatMessage'

interface Props {
  variant: 'sent' | 'received'
  message: ChatMessage
}

const classNames = {
  container: {
    sent: 'flex-row-reverse',
    received: '',
  },
  bubble: {
    sent: 'bg-blue-200 dark:bg-blue-700',
    received: 'bg-gray-200 dark:bg-gray-700',
  },
}

function ChatBubble({ variant, message }: Props) {
  return (
    <div className={`flex items-end gap-2.5 ${classNames.container[variant]} group`}>
      <div
        className={`flex flex-col w-full max-w-[240px] leading-1.5 p-4 border-gray-200 rounded-xl dark:bg-gray-700 justify-start ${classNames.bubble[variant]}`}
      >
        <p className="text-sm font-normal text-gray-900 dark:text-white">{message.message}</p>
      </div>

      <div className="flex items-center mb-2 space-x-2 rtl:space-x-reverse transition opacity-0 group-hover:opacity-100">
        <span className="text-xs font-normal text-gray-500 dark:text-gray-400">
        </span>
      </div>
    </div>
  )
}

export default ChatBubble
