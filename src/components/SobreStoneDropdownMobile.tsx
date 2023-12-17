import { UserQuestion } from './Icons/UserQuestion'
import { Connection } from './Icons/Connection'
import { Handshake } from './Icons/Handshake'
import { Users } from './Icons/Users'
import { MenuMobileDropdownSpacer } from './MenuMobileDropdownSpacer'
import { DropdownMenuMobileOption } from './DropdownMenuMobileOption'

type SobreStoneDropdownMobileProps = {
  show: boolean
}

export function SobreStoneDropdownMobile({
  show,
}: SobreStoneDropdownMobileProps) {
  return (
    <div
      className={`px-6 md:px-4 ${
        show
          ? 'visible max-h-[1500px] opacity-100'
          : 'invisible max-h-0 opacity-0'
      } flex flex-col overflow-hidden transition-all duration-700`}
    >
      <DropdownMenuMobileOption.Root href="/">
        <DropdownMenuMobileOption.Icon icon={<UserQuestion />} hoverEffect />
        <DropdownMenuMobileOption.Content>
          <DropdownMenuMobileOption.Title text="Por que Stone" />
          <DropdownMenuMobileOption.Desc
            text="Conheça nossa história e propósito"
            className="mt-[2px]"
          />
        </DropdownMenuMobileOption.Content>
      </DropdownMenuMobileOption.Root>
      <DropdownMenuMobileOption.Root href="/">
        <DropdownMenuMobileOption.Icon icon={<Connection />} hoverEffect />
        <DropdownMenuMobileOption.Content>
          <DropdownMenuMobileOption.Title text="Stone e Linx" />
          <DropdownMenuMobileOption.Desc
            text="Controle de vendas e recebimentos"
            className="mt-[2px]"
          />
        </DropdownMenuMobileOption.Content>
      </DropdownMenuMobileOption.Root>
      <DropdownMenuMobileOption.Root href="/">
        <DropdownMenuMobileOption.Icon icon={<Handshake />} hoverEffect />
        <DropdownMenuMobileOption.Content>
          <DropdownMenuMobileOption.Title text="Programa de Parcerias" />
          <DropdownMenuMobileOption.Desc
            text="Seu próximo passo começa aqui"
            className="mt-[2px]"
          />
        </DropdownMenuMobileOption.Content>
      </DropdownMenuMobileOption.Root>
      <DropdownMenuMobileOption.Root href="/">
        <DropdownMenuMobileOption.Icon icon={<Users />} hoverEffect />
        <DropdownMenuMobileOption.Content>
          <DropdownMenuMobileOption.Title text="Trabalhe conosco" />
          <DropdownMenuMobileOption.Desc
            text="Transforme seu potencial em potência"
            className="mt-[2px]"
          />
        </DropdownMenuMobileOption.Content>
      </DropdownMenuMobileOption.Root>
      <MenuMobileDropdownSpacer />
    </div>
  )
}
