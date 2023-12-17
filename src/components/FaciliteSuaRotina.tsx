import { DropdownMenuOption } from './DropdownMenuOption'
import { Chart } from './Icons/Chart'
import { CreditCard } from './Icons/CreditCard'
import { Database } from './Icons/Database'
import { Dollar2 } from './Icons/Dollar2'
import { QRCode } from './Icons/QRCode'

export function FaciliteSuaRotina() {
  return (
    <div>
      <p className="px-4 pb-1 text-base font-normal text-color-gray">
        Facilite sua rotina
      </p>
      <div>
        <DropdownMenuOption.Root>
          <DropdownMenuOption.Icon icon={<CreditCard />} />
          <DropdownMenuOption.Content>
            <DropdownMenuOption.Title text="Cartão Stone" />
            <DropdownMenuOption.Desc text="Cartão internacional grátis pra compras e saques" />
          </DropdownMenuOption.Content>
        </DropdownMenuOption.Root>
        <DropdownMenuOption.Root>
          <DropdownMenuOption.Icon icon={<Dollar2 />} />
          <DropdownMenuOption.Content>
            <DropdownMenuOption.Title text="Link de Pagamento" />
            <DropdownMenuOption.Desc text="Venda pela internet e nas redes sociais" />
          </DropdownMenuOption.Content>
        </DropdownMenuOption.Root>
        <DropdownMenuOption.Root>
          <DropdownMenuOption.Icon icon={<QRCode />} />
          <DropdownMenuOption.Content>
            <DropdownMenuOption.Title text="Pix" />
            <DropdownMenuOption.Desc text="Conheça todas as formas de vender com QR Code" />
          </DropdownMenuOption.Content>
        </DropdownMenuOption.Root>
        <DropdownMenuOption.Root>
          <DropdownMenuOption.Icon icon={<Database />} />
          <DropdownMenuOption.Content>
            <DropdownMenuOption.Title text="Antecipação" />
            <DropdownMenuOption.Desc text="Receba antecipadamente o dinheiro das suas vendas" />
          </DropdownMenuOption.Content>
        </DropdownMenuOption.Root>
        <DropdownMenuOption.Root>
          <DropdownMenuOption.Icon icon={<Chart />} />
          <DropdownMenuOption.Content>
            <DropdownMenuOption.Title text="Controle" />
            <DropdownMenuOption.Desc text="Gerencie as suas vendas de onde estiver" />
          </DropdownMenuOption.Content>
        </DropdownMenuOption.Root>
      </div>
    </div>
  )
}
