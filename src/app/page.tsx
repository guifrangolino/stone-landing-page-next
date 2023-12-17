import { BeStone } from '@/components/BeStone'
import { Footer } from '@/components/Footer'
import { FormasDePagamento } from '@/components/FormasDePagamento'
import { Header } from '@/components/Header'
import { HeroBanner } from '@/components/HeroBanner'
import { LinksInternos } from '@/components/LinksInternos'
import { MenosCustoSection } from '@/components/MenosCustoSection'
import { Numero1EmAtendimento } from '@/components/Numero1EmAtendimento'
import { PageSectionLinks } from '@/components/PageSectionLinks'
import { ParceriasSection } from '@/components/ParceriasSection'
import { TestimonialMaquinaDeCartao } from '@/components/TestimonialMaquinaDeCartao'
import { TotalmenteIntegradoSection } from '@/components/TotalmenteIntegradoSection'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <PageSectionLinks />
        <ParceriasSection />
        <MenosCustoSection />
        <Numero1EmAtendimento />
        <TotalmenteIntegradoSection />
        <FormasDePagamento />
        <TestimonialMaquinaDeCartao />
        <BeStone />
        <LinksInternos />
      </main>
      <Footer />
    </>
  )
}
