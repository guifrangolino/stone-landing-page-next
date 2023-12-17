import { Cubes } from '../components/Icons/Cubes'
import { Headset } from '../components/Icons/Headset'
import { Money } from '../components/Icons/Money'
import { Phone2 } from '../components/Icons/Phone2'
import { PageSectionLink } from '../components/PageSectionLink'

export function PageSectionLinks() {
  return (
    <div className="grid max-w-7xl gap-4 px-6 py-10 md:m-auto md:grid-cols-2 lg:my-20 lg:mt-20 lg:grid-cols-4 lg:gap-6 lg:p-0 lg:px-6">
      <PageSectionLink.Root href="#menos-custo-para-seu-bolso">
        <PageSectionLink.Icon icon={<Money />} />
        <PageSectionLink.Content>
          <PageSectionLink.Title text="Justo pro seu bolso" />
          <PageSectionLink.Desc text="Quanto mais seu negócio vende, menos taxa você paga" />
        </PageSectionLink.Content>
      </PageSectionLink.Root>
      <PageSectionLink.Root href="#numero-1-em-atendimento">
        <PageSectionLink.Icon icon={<Headset />} />
        <PageSectionLink.Content>
          <PageSectionLink.Title text="Melhor suporte do país" />
          <PageSectionLink.Desc text="No seu balcão em todo Brasil ou no telefone em 5 segundos" />
        </PageSectionLink.Content>
      </PageSectionLink.Root>
      <PageSectionLink.Root href="#totalmente-integrado">
        <PageSectionLink.Icon icon={<Cubes />} />
        <PageSectionLink.Content>
          <PageSectionLink.Title text="Totalmente integrado" />
          <PageSectionLink.Desc text="Conexão com +90 sistemas de gestão pra otimizar seu fluxo" />
        </PageSectionLink.Content>
      </PageSectionLink.Root>
      <PageSectionLink.Root href="#totalmente-integrado">
        <PageSectionLink.Icon icon={<Phone2 />} />
        <PageSectionLink.Content>
          <PageSectionLink.Title text="Tudo num só App" />
          <PageSectionLink.Desc text="Venda de várias formas, pague contas e faça toda sua gestão" />
        </PageSectionLink.Content>
      </PageSectionLink.Root>
    </div>
  )
}
