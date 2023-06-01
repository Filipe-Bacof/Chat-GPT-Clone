import { Chat } from '@/types/Chat'
import { useState } from 'react'
import IconChatLeft from './icons/IconChatLeft'
import IconTrash from './icons/IconTrash'
import IconEdit3 from './icons/IconEdit3'
import IconClose from './icons/IconClose'
import IconCheck from './icons/IconCheck'

type Props = {
  chatItem: Chat
  active: boolean
  onClick: (id: string) => void
  onDelete: (id: string) => void
  onEdit: (id: string, newTitle: string) => void
}

export const SidebarChatButton = ({
  chatItem,
  active,
  onClick,
  onDelete,
  onEdit,
}: Props) => {
  const [deleting, setDeleting] = useState(false)
  const [editing, setEditing] = useState(false)
  const [titleInput, setTitleInput] = useState(chatItem.title)

  const handleClickButton = () => {
    if (!deleting || !editing) {
      onClick(chatItem.id)
    }
  }

  const handleConfirmButton = () => {
    if (deleting) {
      onDelete(chatItem.id)
    }
    if (editing && titleInput.trim() !== '') {
      onEdit(chatItem.id, titleInput.trim())
    }

    handleCancelButton() // set deleting & editing FALSE
  }

  const handleCancelButton = () => {
    setDeleting(false)
    setEditing(false)
  }

  return (
    <div
      onClick={handleClickButton}
      className={`flex cursor-pointer items-center rounded-md p-3 text-sm hover:bg-gray-500/10 ${
        active ? 'bg-gray-500/20' : 'bg-transparent'
      }`}
    >
      <div className="mr-3">
        {!deleting && <IconChatLeft height={16} width={16} />}
        {deleting && <IconTrash height={16} width={16} />}
      </div>
      <div className="flex-1 overflow-x-hidden text-sm">
        {editing && (
          <input
            className="w-full border border-blue-500 bg-transparent text-sm outline-none"
            type="text"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
          />
        )}
        {!editing && (
          <div className="truncate border border-transparent">
            {!deleting && chatItem.title}
            {deleting && `Delete "${chatItem.title}"`}
          </div>
        )}
      </div>
      {active && !deleting && !editing && (
        <div className="flex">
          <div
            onClick={() => setEditing(true)}
            className="mx-1 cursor-pointer opacity-60 hover:opacity-100"
          >
            <IconEdit3 height={16} width={16} />
          </div>
          <div
            onClick={() => setDeleting(true)}
            className="mx-1 cursor-pointer opacity-60 hover:opacity-100"
          >
            <IconTrash height={16} width={16} />
          </div>
        </div>
      )}
      {(deleting || editing) && (
        <div className="flex">
          <div
            onClick={handleConfirmButton}
            className="mx-1 cursor-pointer opacity-60 hover:opacity-100"
          >
            <IconCheck height={16} width={16} />
          </div>
          <div
            onClick={handleCancelButton}
            className="mx-1 cursor-pointer opacity-60 hover:opacity-100"
          >
            <IconClose height={16} width={16} />
          </div>
        </div>
      )}
    </div>
  )
}
