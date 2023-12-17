import { DropdownMenuOption } from './DropdownMenuOption'
import { Lifebuoy } from './Icons/Lifebuoy'
import { Phone } from './Icons/Phone'
import { UserDialog } from './Icons/UserDialog'
import { WhatsApp } from './Icons/WhatsApp'

export function AtendimentoDropdown() {
  return (
    <ul className="invisible absolute right-0 top-[63px] flex w-[345px] max-w-7xl flex-col rounded-b-2xl border-t-[1px] border-border-color bg-white pb-4 pl-[1px] opacity-0 shadow-menuDrop transition-opacity group-hover:visible group-hover:opacity-100">
      <p className="mb-2 px-4 pt-6 text-base font-normal text-color-gray">
        Ainda não sou cliente
      </p>
      <li>
        <DropdownMenuOption.Root2>
          <DropdownMenuOption.Icon icon={<Phone />} />
          <DropdownMenuOption.Content>
            <DropdownMenuOption.Title2 text="Adquira pelo telefone" />
            <DropdownMenuOption.Desc3 text="3004-9681" />
          </DropdownMenuOption.Content>
        </DropdownMenuOption.Root2>
      </li>
      <li>
        <DropdownMenuOption.Root2>
          <DropdownMenuOption.Icon icon={<WhatsApp />} />
          <DropdownMenuOption.Content>
            <DropdownMenuOption.Title2 text="Adquira pelo WhatsApp" />
          </DropdownMenuOption.Content>
        </DropdownMenuOption.Root2>
      </li>
      <hr className="h-[1px] w-full border-border-color" />
      <p className="mb-2 px-4 pt-6 text-base font-normal text-color-gray">
        Já sou cliente
      </p>
      <li>
        <DropdownMenuOption.Root2>
          <DropdownMenuOption.Icon icon={<Phone />} />
          <DropdownMenuOption.Content>
            <DropdownMenuOption.Title2 text="Atendimento por telefone" />
            <DropdownMenuOption.Desc3 text="3004-9680" />
          </DropdownMenuOption.Content>
        </DropdownMenuOption.Root2>
      </li>
      <li>
        <DropdownMenuOption.Root2>
          <DropdownMenuOption.Icon icon={<WhatsApp />} />
          <DropdownMenuOption.Content>
            <DropdownMenuOption.Title2 text="Atendimento por WhatsApp" />
          </DropdownMenuOption.Content>
        </DropdownMenuOption.Root2>
      </li>
      <li>
        <DropdownMenuOption.Root2>
          <DropdownMenuOption.Icon icon={<Lifebuoy />} />
          <DropdownMenuOption.Content>
            <DropdownMenuOption.Title2 text="Central de Ajuda" />
          </DropdownMenuOption.Content>
        </DropdownMenuOption.Root2>
      </li>
      <hr className="h-[1px] w-full border-border-color" />
      <li>
        <DropdownMenuOption.Root2>
          <DropdownMenuOption.Icon icon={<UserDialog />} />
          <DropdownMenuOption.Content>
            <DropdownMenuOption.Title2 text="Entre em contato" />
          </DropdownMenuOption.Content>
        </DropdownMenuOption.Root2>
      </li>
    </ul>
  )
}
