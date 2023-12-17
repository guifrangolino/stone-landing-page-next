import { DropdownMenuOption } from './DropdownMenuOption'
import { CardMachine } from './Icons/CardMachine'
import { Dollar } from './Icons/Dollar'
import { Life } from './Icons/Life'
import { Lifebuoy } from './Icons/Lifebuoy'
import { WhatsApp } from './Icons/WhatsApp'

export function ProSeuNegocio() {
  return (
    <div>
      <p className="px-4 pb-1 text-base font-normal text-color-gray">
        Pro seu negócio
      </p>
      <div>
        <DropdownMenuOption.Root>
          <DropdownMenuOption.Icon icon={<CardMachine />} />
          <DropdownMenuOption.Content>
            <DropdownMenuOption.Title text="Maquininha" />
            <DropdownMenuOption.Desc text="A máquina de cartão que facilita o seu dia a dia" />
          </DropdownMenuOption.Content>
        </DropdownMenuOption.Root>
        <DropdownMenuOption.Root>
          <DropdownMenuOption.Icon icon={<Dollar />} />
          <DropdownMenuOption.Content>
            <DropdownMenuOption.Title text="Conta Empresa" />
            <DropdownMenuOption.Desc text="Conta PJ gratuita, sem burocracia e feita pro seu negócio" />
          </DropdownMenuOption.Content>
        </DropdownMenuOption.Root>
        <DropdownMenuOption.Root>
          <DropdownMenuOption.Icon icon={<WhatsApp />} />
          <DropdownMenuOption.Content>
            <DropdownMenuOption.Title text="Venda no WhatsApp" />
            <DropdownMenuOption.Desc text="Venda online com a Stone pelo seu WhatsApp" />
          </DropdownMenuOption.Content>
        </DropdownMenuOption.Root>
        <DropdownMenuOption.Root>
          <DropdownMenuOption.Icon icon={<Lifebuoy />} />
          <DropdownMenuOption.Content>
            <DropdownMenuOption.Title text="Seguro de Loja" />
            <DropdownMenuOption.Desc text="Proteção pro seu negócio por menos de R$2 por dia" />
          </DropdownMenuOption.Content>
        </DropdownMenuOption.Root>
        <DropdownMenuOption.Root>
          <DropdownMenuOption.Icon icon={<Life />} />
          <DropdownMenuOption.Content>
            <DropdownMenuOption.Title text="Seguro de Vida" />
            <DropdownMenuOption.Desc text="Pra você e sua família ficarem  protegidos" />
          </DropdownMenuOption.Content>
        </DropdownMenuOption.Root>
      </div>
    </div>
  )
}
