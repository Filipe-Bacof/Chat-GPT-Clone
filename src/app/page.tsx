'use client'

import { Sidebar } from '@/components/Sidebar'
import { useState } from 'react'

const Page = () => {
  const [sidebarOpened, setSidebarOpened] = useState(true)

  const closeSidebar = () => {}

  return (
    <main className="flex min-h-screen bg-gpt-gray">
      <Sidebar open={sidebarOpened} onClose={closeSidebar}>
        <p>ola</p>
      </Sidebar>
      <section className="flex w-full flex-col">...</section>
    </main>
  )
}

export default Page
