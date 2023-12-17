import { DropdownMenuOption } from './DropdownMenuOption'
import { Connection } from './Icons/Connection'
import { Handshake } from './Icons/Handshake'
import { UserQuestion } from './Icons/UserQuestion'
import { Users } from './Icons/Users'

export function SobreStoneDropdown() {
  return (
    <ul className="invisible absolute left-0 top-[63px] flex w-[345px] max-w-7xl flex-col rounded-b-2xl border-t-[1px] border-border-color bg-white py-4 pl-[1px] opacity-0 shadow-menuDrop transition-opacity group-hover:visible group-hover:opacity-100">
      <li>
        <DropdownMenuOption.Root2>
          <DropdownMenuOption.Icon icon={<UserQuestion />} />
          <DropdownMenuOption.Content>
            <DropdownMenuOption.Title2 text="Por que Stone" />
            <DropdownMenuOption.Desc2 text="Conheça nossa história e propósito" />
          </DropdownMenuOption.Content>
        </DropdownMenuOption.Root2>
      </li>
      <li>
        <DropdownMenuOption.Root2>
          <DropdownMenuOption.Icon icon={<Connection />} />
          <DropdownMenuOption.Content>
            <DropdownMenuOption.Title2 text="Stone e Linx" />
            <DropdownMenuOption.Desc2 text="Controle de vendas e recebimentos" />
          </DropdownMenuOption.Content>
        </DropdownMenuOption.Root2>
      </li>
      <li>
        <DropdownMenuOption.Root2>
          <DropdownMenuOption.Icon icon={<Handshake />} />
          <DropdownMenuOption.Content>
            <DropdownMenuOption.Title2 text="Programa de Parcerias" />
            <DropdownMenuOption.Desc2 text="Seu próximo passo começa aqui" />
          </DropdownMenuOption.Content>
        </DropdownMenuOption.Root2>
      </li>
      <li>
        <DropdownMenuOption.Root2>
          <DropdownMenuOption.Icon icon={<Users />} />
          <DropdownMenuOption.Content>
            <DropdownMenuOption.Title2 text="Trabalhe conosco" />
            <DropdownMenuOption.Desc2 text="Transforme seu potencial em potência" />
          </DropdownMenuOption.Content>
        </DropdownMenuOption.Root2>
      </li>
    </ul>
  )
}
