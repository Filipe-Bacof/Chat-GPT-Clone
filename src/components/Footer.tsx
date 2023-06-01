import { ChatMessageInput } from './ChatMessageInput'

type Props = {
  disabled: boolean
  onSendMessage: (message: string) => void
}

export const Footer = ({ disabled, onSendMessage }: Props) => {
  return (
    <footer className="w-full border-t border-t-gray-600 p-2">
      <div className="m-auto max-w-4xl">
        <ChatMessageInput disabled={disabled} onSend={onSendMessage} />
        <div className="pt-3 text-center text-xs text-gray-300">
          Feito por Filipe Bacof - Veja o meu portifólio:
          <a
            className="underline"
            target="_blank"
            href="https://portifolio-filipe-bacof.vercel.app/"
            rel="noreferrer"
          >
            Acesse aqui!
          </a>
        </div>
      </div>
    </footer>
  )
}
