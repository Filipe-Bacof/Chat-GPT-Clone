import IconSunTwentyFour from './icons/IconSunTwentyFour'
import IconThunderbolt from './icons/IconThunderbolt'
import IconWarning from './icons/IconWarning'

export const ChatPlaceholder = () => {
  return (
    <div className="m-5">
      <h3 className="my-8 cursor-default text-center text-4xl font-bold">
        ChatGPT Clone
      </h3>
      <div className=" m-auto mb-8 flex flex-col gap-5 md:max-w-4xl md:flex-row">
        <div>
          <div className="mb-3 flex cursor-default items-center justify-center text-lg">
            <IconSunTwentyFour width={24} height={24} className="mr-3" />
            Exemplos
          </div>
          <div className="mb-3 cursor-pointer rounded bg-white/5 p-3 text-center text-sm text-white">
            &quot;Explique a computação quântica em termos simples&quot;
          </div>
          <div className="mb-3 cursor-pointer rounded bg-white/5 p-3 text-center text-sm text-white">
            &quot;Tem alguma ideia criativa para o aniversário de uma criança de
            10 anos?&quot;
          </div>
          <div className="mb-3 cursor-pointer rounded bg-white/5 p-3 text-center text-sm text-white">
            &quot;Como faço uma solicitação HTTP em Javascript?&quot;
          </div>
        </div>
        <div>
          <div className="mb-3 flex cursor-default items-center justify-center text-lg">
            <IconThunderbolt width={24} height={24} className="mr-3" />
            Capacidades
          </div>
          <div className="mb-3 cursor-default rounded bg-white/5 p-3 text-center text-sm text-white">
            Lembra o que o usuário disse anteriormente na conversa
          </div>
          <div className="mb-3 cursor-default rounded bg-white/5 p-3 text-center text-sm text-white">
            Permite que o usuário forneça correções de acompanhamento
          </div>
          <div className="mb-3 cursor-default rounded bg-white/5 p-3 text-center text-sm text-white">
            Treinado para recusar pedidos inapropriados
          </div>
        </div>
        <div>
          <div className="mb-3 flex cursor-default items-center justify-center text-lg">
            <IconWarning width={24} height={24} className="mr-3" />
            Limitações
          </div>
          <div className="mb-3 cursor-default rounded bg-white/5 p-3 text-center text-sm text-white">
            Ocasionalmente pode gerar informações incorretas
          </div>
          <div className="mb-3 cursor-default rounded bg-white/5 p-3 text-center text-sm text-white">
            Ocasionalmente, pode produzir instruções prejudiciais ou conteúdo
            tendencioso
          </div>
          <div className="mb-3 cursor-default rounded bg-white/5 p-3 text-center text-sm text-white">
            Conhecimento limitado do mundo e eventos após 2021
          </div>
        </div>
      </div>
    </div>
  )
}
