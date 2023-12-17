import { CardMachine } from './Icons/CardMachine'
import { Dollar } from './Icons/Dollar'
import { Lifebuoy } from './Icons/Lifebuoy'
import { Life } from './Icons/Life'
import { WhatsApp } from './Icons/WhatsApp'
import { DropdownMenuMobileOptionLink } from './DropdownMenuMobileOptionLink'

export function ProSeuNegocioMobile() {
  return (
    <div>
      <p className="px-4 pt-4 font-normal text-color-gray">Pro seu negócio</p>
      <div className="flex flex-col md:gap-1">
        <DropdownMenuMobileOptionLink.Root>
          <DropdownMenuMobileOptionLink.Icon icon={<CardMachine />} />
          <DropdownMenuMobileOptionLink.Content>
            <DropdownMenuMobileOptionLink.Title text="Maquininha" />
            <DropdownMenuMobileOptionLink.Desc text="A máquina de cartão que facilita o seu dia a dia" />
          </DropdownMenuMobileOptionLink.Content>
        </DropdownMenuMobileOptionLink.Root>
        <DropdownMenuMobileOptionLink.Root>
          <DropdownMenuMobileOptionLink.Icon icon={<Dollar />} />
          <DropdownMenuMobileOptionLink.Content>
            <DropdownMenuMobileOptionLink.Title text="Conta Empresa" />
            <DropdownMenuMobileOptionLink.Desc text="Conta PJ gratuita, sem burocracia e feita pro seu negócio" />
          </DropdownMenuMobileOptionLink.Content>
        </DropdownMenuMobileOptionLink.Root>
        <DropdownMenuMobileOptionLink.Root>
          <DropdownMenuMobileOptionLink.Icon icon={<WhatsApp />} />
          <DropdownMenuMobileOptionLink.Content>
            <DropdownMenuMobileOptionLink.Title text="Venda no WhatsApp" />
            <DropdownMenuMobileOptionLink.Desc text="Venda online com a Stone pelo seu WhatsApp" />
          </DropdownMenuMobileOptionLink.Content>
        </DropdownMenuMobileOptionLink.Root>
        <DropdownMenuMobileOptionLink.Root>
          <DropdownMenuMobileOptionLink.Icon icon={<Lifebuoy />} />
          <DropdownMenuMobileOptionLink.Content>
            <DropdownMenuMobileOptionLink.Title text="Seguro de Loja" />
            <DropdownMenuMobileOptionLink.Desc text="Proteção pro seu negócio por menos de R$2 por dia" />
          </DropdownMenuMobileOptionLink.Content>
        </DropdownMenuMobileOptionLink.Root>
        <DropdownMenuMobileOptionLink.Root>
          <DropdownMenuMobileOptionLink.Icon icon={<Life />} />
          <DropdownMenuMobileOptionLink.Content>
            <DropdownMenuMobileOptionLink.Title text="Seguro de Vida" />
            <DropdownMenuMobileOptionLink.Desc text="Pra você e sua família ficarem protegidos" />
          </DropdownMenuMobileOptionLink.Content>
        </DropdownMenuMobileOptionLink.Root>
      </div>
    </div>
  )
}
