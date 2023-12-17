import { Button } from './Button'
import { Phone } from './Icons/Phone'
import { WhatsApp } from './Icons/WhatsApp'

type SuporteParaClienteMobileProps = {
  isOpen: boolean
}

export function SuporteParaClienteMobile({
  isOpen,
}: SuporteParaClienteMobileProps) {
  return (
    <div
      className={`absolute right-0 top-[64px] ${
        isOpen ? 'visible opacity-100' : 'invisible opacity-0'
      } w-full flex-col overflow-hidden transition-all duration-700 2sm:h-[calc(100vh-64px)] md:h-[calc(100vh-72px)]`}
    >
      <div
        className={`ml-auto flex h-full w-full max-w-[500px] flex-col bg-background4-color transition-all duration-700 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center gap-3 bg-white p-4">
          <p className="font-bold">Quero ser cliente Stone</p>
          <div className="flex w-full gap-3">
            <Button href="/" secondary large className="w-1/2 font-normal">
              <div className="mr-2">
                <Phone />
              </div>
              Telefone
            </Button>
            <Button href="/" secondary large className="w-1/2 font-normal">
              <div className="mr-2">
                <WhatsApp />
              </div>
              Whatsapp
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 bg-white p-4">
          <p className="font-bold">Já sou cliente Stone</p>
          <div className="flex w-full gap-3">
            <Button href="/" large className="w-1/2 font-normal">
              <div className="mr-2">
                <Phone />
              </div>
              Telefone
            </Button>
            <Button href="/" large className="w-1/2 font-normal">
              <div className="mr-2">
                <WhatsApp />
              </div>
              Whatsapp
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
