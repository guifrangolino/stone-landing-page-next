import { ConhecaNossosPlanos } from './ConhecaNossosPlanos'
import { FaciliteSuaRotina } from './FaciliteSuaRotina'
import { PraVoceAutonomo } from './PraVoceAutonomo'
import { ProSeuNegocio } from './ProSeuNegocio'

export function ProdutosDropdown() {
  return (
    <ul className="invisible absolute left-[calc(-100%-14px)] top-full flex w-[calc(100vw-32px)] max-w-7xl rounded-b-3xl border-t-[1px] border-border-color bg-white opacity-0 shadow-menuDrop transition-opacity group-hover:visible group-hover:opacity-100">
      <li className="px-4 pt-6 xl:px-6">
        <ConhecaNossosPlanos />
      </li>
      <li className="flex py-6">
        <ProSeuNegocio />
        <FaciliteSuaRotina />
      </li>
      <li className="rounded-br-3xl bg-background3-color py-6 pr-4">
        <PraVoceAutonomo />
      </li>
    </ul>
  )
}
