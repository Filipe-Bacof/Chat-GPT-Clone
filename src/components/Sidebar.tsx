import { ReactNode } from 'react'
import IconClose from './icons/IconClose'
import IconAdd from './icons/IconAdd'
import { SidebarButton } from './SidebarButton'
import IconTrash from './icons/IconTrash'

type Props = {
  children: ReactNode
  open: boolean
  onClose: () => void
  onClear: () => void
  onNewChat: () => void
}

export const Sidebar = ({
  open,
  onClose,
  onClear,
  onNewChat,
  children,
}: Props) => {
  return (
    <section
      className={`fixed bottom-0 left-0 top-0 text-white ${
        open ? 'w-screen bg-gray-600/75' : 'w-0'
      } md:static md:w-64`}
    >
      <div
        className={`flex h-screen transition-all duration-200 ${
          open ? 'ml-0' : '-ml-96'
        } md:ml-0`}
      >
        <div className="flex w-64 flex-col bg-[#202123] p-2">
          <div
            onClick={onNewChat}
            className="flex cursor-pointer items-center rounded-md border border-white/20 p-3 text-sm hover:bg-gray-500/20"
          >
            <IconAdd width={16} height={16} className="mr-3" />
            Nova conversa
          </div>

          <nav className="flex-1 overflow-y-auto pt-2">{children}</nav>

          <div className="border-t border-gray-700 pt-2">
            <SidebarButton
              icon={<IconTrash width={16} height={16} />}
              label="Limpar todas as conversas"
              onClick={onClear}
            />
          </div>
        </div>
        <div
          onClick={onClose}
          className="flex h-10 w-10 cursor-pointer items-center justify-center md:hidden"
        >
          <IconClose width={24} height={24} />
        </div>
      </div>
    </section>
  )
}
