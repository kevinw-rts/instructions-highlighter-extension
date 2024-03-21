import { TextInput } from 'flowbite-react'
// import { ArrowUpIcon } from '@heroicons/react/16/solid'
import { useState, forwardRef } from 'react'
import ChatMessage from '../types/ChatMessage'

interface Props {
  isLoading: boolean
  onSubmit: (message: ChatMessage) => void
}

const ChatInput = forwardRef(({ isLoading, onSubmit }: Props, ref: React.ForwardedRef<HTMLInputElement>) => {
  const [message, setMessage] = useState<string>('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!message.trim() || isLoading) {
      return;
    }

    onSubmit({
      message,
      timestamp: new Date().toISOString(),
      user_id: 123,
      date: new Date().toDateString(),
      id: new Date().toISOString(),
    })

    setMessage('')
  }

  return (
    <>
      <form id="chat-form" className="relative p-2" onSubmit={handleSubmit}>
        <div className="flex gap-2 relative">
          <TextInput
            id="chat-input"
            value={message}
            className="grow"
            placeholder="Type a message"
            shadow
            autoComplete="off"
            onChange={(e) => setMessage(e.target.value)}
            ref={ref}
          />

          <button
            type="submit"
            className={`shadow-xl absolute right-2 bottom-2 rounded-full bg-teal-500 text-white p-1.5 hover:bg-teal-600 transition duration-300 ${message.length === 0 || isLoading ? 'pointer-events-none opacity-0' : 'opacity-100'
              }`}
          >
            <div className="sr-only">Send</div>
            {/* <ArrowUpIcon className="w-4 h-4" /> */}
          </button>
        </div>
      </form>
    </>
  )
})

export default ChatInput
