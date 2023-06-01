import { ReactNode } from 'react'
import IconClose from './icons/IconClose'

type Props = {
  children: ReactNode
  open: boolean
  onClose: () => void
}

export const Sidebar = ({ open, onClose, children }: Props) => {
  return (
    <section
      className={`fixed bottom-0 left-0 top-0 text-white ${
        open ? 'w-screen bg-gray-600/75' : 'w-0'
      } md:static md:w-64`}
    >
      <div className="">
        <div className="">barra mesmo</div>
        <div className="flex h-10 w-10 cursor-pointer items-center justify-center md:hidden">
          <IconClose width={24} height={24} />
        </div>
      </div>
    </section>
  )
}
