import { DropdownMenuMobileOption } from './DropdownMenuMobileOption'
import { Lifebuoy } from './Icons/Lifebuoy'
import { Phone } from './Icons/Phone'
import { UserDialog } from './Icons/UserDialog'
import { WhatsApp } from './Icons/WhatsApp'
import { MenuMobileDropdownSpacer } from './MenuMobileDropdownSpacer'

type AtendimentoDropdownMobileProps = {
  show: boolean
}

export function AtendimentoDropdownMobile({
  show,
}: AtendimentoDropdownMobileProps) {
  return (
    <div
      className={`px-6 md:px-4 ${
        show
          ? 'visible max-h-[1500px] opacity-100'
          : 'invisible max-h-0 opacity-0'
      } flex flex-col overflow-hidden text-color-dark-gray transition-all duration-700`}
    >
      <div className="pt-4">
        <p className="mb-2 px-4 font-bold">Ainda não sou cliente</p>
        <DropdownMenuMobileOption.Root href="/">
          <DropdownMenuMobileOption.Icon icon={<Phone />} hoverEffect />
          <DropdownMenuMobileOption.Content className="ml-1">
            <DropdownMenuMobileOption.Title text="Adquira pelo Telefone" />
            <DropdownMenuMobileOption.Desc
              text="3004-9681"
              className="mt-[2px] !text-base font-semibold"
            />
          </DropdownMenuMobileOption.Content>
        </DropdownMenuMobileOption.Root>
        <DropdownMenuMobileOption.Root href="/">
          <DropdownMenuMobileOption.Icon icon={<WhatsApp />} hoverEffect />
          <DropdownMenuMobileOption.Content className="ml-1">
            <DropdownMenuMobileOption.Title text="Adquira pelo WhatsApp" />
          </DropdownMenuMobileOption.Content>
        </DropdownMenuMobileOption.Root>
      </div>
      <hr className="h-[1px] w-full border-border-color" />
      <div className="pt-4">
        <p className="mb-2 px-4 font-bold">Já sou cliente</p>
        <DropdownMenuMobileOption.Root href="/">
          <DropdownMenuMobileOption.Icon icon={<Lifebuoy />} hoverEffect />
          <DropdownMenuMobileOption.Content className="ml-1">
            <DropdownMenuMobileOption.Title text="Central de ajuda" />
            <DropdownMenuMobileOption.Desc
              text="Tire todas as suas dúvidas com nossos artigos, vídeos e tutoriais"
              className="mt-[2px]"
            />
          </DropdownMenuMobileOption.Content>
        </DropdownMenuMobileOption.Root>
        <DropdownMenuMobileOption.Root href="/">
          <DropdownMenuMobileOption.Icon icon={<Phone />} hoverEffect />
          <DropdownMenuMobileOption.Content className="ml-1">
            <DropdownMenuMobileOption.Title text="Atendimento pelo telefone" />
            <DropdownMenuMobileOption.Desc
              text="3004-9680"
              className="mt-[2px] !text-base font-semibold"
            />
          </DropdownMenuMobileOption.Content>
        </DropdownMenuMobileOption.Root>
        <DropdownMenuMobileOption.Root href="/">
          <DropdownMenuMobileOption.Icon icon={<WhatsApp />} hoverEffect />
          <DropdownMenuMobileOption.Content className="ml-1">
            <DropdownMenuMobileOption.Title text="Atendimento pelo WhatsApp" />
          </DropdownMenuMobileOption.Content>
        </DropdownMenuMobileOption.Root>
        <hr className="h-[1px] w-full border-border-color" />
        <DropdownMenuMobileOption.Root href="/">
          <DropdownMenuMobileOption.Icon icon={<UserDialog />} hoverEffect />
          <DropdownMenuMobileOption.Content className="ml-1">
            <DropdownMenuMobileOption.Title text="Entre em contato" />
            <DropdownMenuMobileOption.Desc
              text="Atendimento humano, sempre que você precisar"
              className="mt-[2px]"
            />
          </DropdownMenuMobileOption.Content>
        </DropdownMenuMobileOption.Root>
        <MenuMobileDropdownSpacer />
      </div>
    </div>
  )
}
