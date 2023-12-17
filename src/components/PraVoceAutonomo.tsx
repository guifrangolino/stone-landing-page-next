import { DropdownMenuOption } from './DropdownMenuOption'
import { CardMachine2 } from './Icons/CardMachine2'
import { Equal } from './Icons/Equal'
import { SupermarketCart } from './Icons/SupermarketCart'

export function PraVoceAutonomo() {
  return (
    <>
      <p className="pb-1 pl-6 text-base font-normal text-color-gray">
        Pra você que é autônomo
      </p>
      <DropdownMenuOption.Root>
        <DropdownMenuOption.Icon icon={<CardMachine2 />} />
        <DropdownMenuOption.Content>
          <DropdownMenuOption.Title text="Ton" />
          <DropdownMenuOption.Desc text="Ton é da Stone pro autônomo" />
        </DropdownMenuOption.Content>
      </DropdownMenuOption.Root>
      <p className="pb-1 pl-6 text-base font-normal text-color-gray">
        Mais soluções
      </p>
      <DropdownMenuOption.Root>
        <DropdownMenuOption.Icon icon={<SupermarketCart />} />
        <DropdownMenuOption.Content>
          <DropdownMenuOption.Title text="E-commerce" />
          <DropdownMenuOption.Desc text="Pagar.me, pra você que já tem uma loja virtual" />
        </DropdownMenuOption.Content>
      </DropdownMenuOption.Root>
      <DropdownMenuOption.Root>
        <DropdownMenuOption.Icon icon={<Equal />} />
        <DropdownMenuOption.Content>
          <DropdownMenuOption.Title text="Raio X" />
          <DropdownMenuOption.Desc text="Acompanhe todas suas maquininhas e taxas em um só lugar" />
        </DropdownMenuOption.Content>
      </DropdownMenuOption.Root>
    </>
  )
}
