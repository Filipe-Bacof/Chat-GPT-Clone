'use client'

import { ChatArea } from '@/components/ChatArea'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import { useState } from 'react'

const Page = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false)

  const openSidebar = () => {
    setSidebarOpened(true)
  }
  const closeSidebar = () => {
    setSidebarOpened(false)
  }

  const handleClearConversations = () => {}

  const handleNewChat = () => {}

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
        <ChatArea />
      </section>
    </main>
  )
}

export default Page
