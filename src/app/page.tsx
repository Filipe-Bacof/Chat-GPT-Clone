'use client'

import { ChatArea } from '@/components/ChatArea'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import { Chat } from '@/types/Chat'
import { useEffect, useState } from 'react'

const Page = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false)
  const [chatList, setChatList] = useState<Chat[]>([])
  const [chatActiveId, setChatActiveId] = useState<string>('')
  const [chatActive, setChatActive] = useState<Chat>()
  const [AILoading, setAILoading] = useState(false)

  useEffect(() => {
    setChatActive(chatList.find((item) => item.id === chatActiveId))
  }, [chatActiveId, chatList])

  const openSidebar = () => {
    setSidebarOpened(true)
  }
  const closeSidebar = () => {
    setSidebarOpened(false)
  }

  const handleClearConversations = () => {}

  const handleNewChat = () => {}

  const handleSendMessage = () => {}

  return (
    <main className="flex min-h-screen bg-gpt-gray">
      <Sidebar
        open={sidebarOpened}
        onClose={closeSidebar}
        onClear={handleClearConversations}
        onNewChat={handleNewChat}
      >
        ...
      </Sidebar>
      <section className="flex w-full flex-col">
        <Header
          openSidebarClick={openSidebar}
          title={`Titulo 123`}
          newChatClick={handleNewChat}
        />
        <ChatArea chat={chatActive} />

        <Footer disabled={AILoading} onSendMessage={handleSendMessage} />
      </section>
    </main>
  )
}

export default Page
