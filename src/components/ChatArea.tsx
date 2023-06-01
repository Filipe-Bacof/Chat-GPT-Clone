import { Chat } from '@/types/Chat'
import { ChatPlaceholder } from './ChatPlaceholder'
import { ChatMessageItem } from './ChatMessageItem'

type Props = {
  chat: Chat | undefined
}

export const ChatArea = ({ chat }: Props) => {
  return (
    <section className="h-0 flex-auto overflow-y-scroll">
      {!chat && <ChatPlaceholder />}
      {chat &&
        chat.messages.map((item) => (
          <ChatMessageItem key={item.id} item={item} />
        ))}
    </section>
  )
}
