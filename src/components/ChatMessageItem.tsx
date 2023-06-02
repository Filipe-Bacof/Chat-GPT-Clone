import { ChatMessage } from '@/types/ChatMessage'
import IconUser from './icons/IconUser'
import IconOpenai from './icons/IconOpenai'

type Props = {
  item: ChatMessage
}

export const ChatMessageItem = ({ item }: Props) => {
  return (
    <div className={`py-5 ${item.author === 'ai' && 'bg-gray-600/50'}`}>
      <div className="m-auto flex max-w-4xl">
        <div
          className={`mx-4 flex h-10 w-10 items-center justify-center rounded md:ml-0 ${
            item.author === 'ai' ? 'bg-gpt-ai-color' : 'bg-blue-900'
          }`}
        >
          {item.author === 'me' && <IconUser width={24} height={24} />}
          {item.author === 'ai' && <IconOpenai width={24} height={24} />}
        </div>
        <div className="flex-1 whitespace-pre-wrap text-base">{item.body}</div>
      </div>
    </div>
  )
}
