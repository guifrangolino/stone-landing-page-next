import { ProSeuNegocioMobile } from './ProSeuNegocioMobile'
import { FaciliteSuaRotinaMobile } from './FaciliteSuaRotinaMobile'
import { PraVoceQueAutonomoMobile } from './PraVoceQueAutonomoMobile'
import { MaisSolucoesMobile } from './MaisSolucoesMobile'
import { MenuMobileDropdownSpacer } from './MenuMobileDropdownSpacer'

type ProdutosDropdownMobileProps = {
  show: boolean
}

export function ProdutosDropdownMobile({ show }: ProdutosDropdownMobileProps) {
  return (
    <div
      className={`px-6 md:px-4 ${
        show
          ? 'visible max-h-[1500px] opacity-100'
          : 'invisible max-h-0 opacity-0'
      } flex flex-col overflow-hidden transition-all duration-700`}
    >
      <ProSeuNegocioMobile />
      <FaciliteSuaRotinaMobile />
      <PraVoceQueAutonomoMobile />
      <MaisSolucoesMobile />
      <MenuMobileDropdownSpacer />
    </div>
  )
}
