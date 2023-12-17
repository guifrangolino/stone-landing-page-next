import { FooterPageLinks } from './FooterPageLinks'
import { CopyrightIcon } from './Icons/CopyrightIcon'
import { FacebookIcon } from './Icons/FacebookIcon'
import { InstagramIcon } from './Icons/InstagramIcon'
import { LinkedinIcon } from './Icons/LinkedinIcon'
import { PagarMeLogo } from './Icons/PagarMeLogo'
import { PageLogo } from './Icons/PageLogo'
import { StoneLogo2 } from './Icons/StoneLogo2'
import { StoneLogo3 } from './Icons/StoneLogo3'
import { TonLogo } from './Icons/TonLogo'
import { TwitterIcon } from './Icons/TwitterIcon'
import { YoutubeIcon } from './Icons/YoutubeIcon'

export function Footer() {
  return (
    <footer className="bg-footer-background px-6 py-8 text-white">
      <div className="mx-auto my-0 max-w-[1324px]">
        {/**/}
        <div className="mx-auto my-0 flex flex-col md:mb-12 md:mt-[8px] md:h-auto md:flex-row md:justify-between">
          <a
            href="/"
            className="mb-8 h-auto w-[96px] md:mb-0 md:h-[28px] md:w-[106px]"
          >
            <PageLogo fullWidth />
          </a>
          <div className="flex gap-8 sm:justify-start md:justify-end">
            <a href="/">
              <FacebookIcon />
            </a>
            <a href="/">
              <TwitterIcon />
            </a>
            <a href="/">
              <InstagramIcon />
            </a>
            <a href="/">
              <LinkedinIcon />
            </a>
            <a href="/">
              <YoutubeIcon />
            </a>
          </div>
        </div>
        {/**/}
        <FooterPageLinks />
        {/**/}
        <div className="my-10 md:my-8">
          <div className="flex flex-row items-center gap-1">
            <CopyrightIcon />
            <p className="text-sm text-white">
              Stone Instituição de Pagamento S.A. CNPJ 16.501.555/0001-57
            </p>
          </div>
          <p className="my-1 text-sm text-white">
            Av. Doutora Ruth Cardoso, 7221, 20° andar, Pinheiros, CEP 05425-902
            - São Paulo/SP
          </p>
          <p className="text-sm text-white">
            Instituição de pagamento autorizada pelo Banco Central do Brasil,
            nas modalidades de credenciadora e emissora de moeda eletrônica.
          </p>
        </div>
        {/**/}
        <div className="mb-6 flex h-full justify-end">
          <a href="/">
            <StoneLogo2 />
          </a>
        </div>
        {/**/}
        <div className="flex gap-8 border-t border-background5-color">
          <a
            href="/"
            className="flex w-12 flex-col items-center border-[3px] border-transparent border-t-primary-color pt-3"
          >
            <StoneLogo3 />
            <p className="mt-[10px] text-center text-[10px] text-white">
              STONE
            </p>
          </a>
          <a
            href="/"
            className="group flex w-12 flex-col items-center border-[3px] border-transparent pt-3 text-[#585858] transition-all hover:border-t-primary-color hover:text-white"
          >
            <TonLogo />
            <p className="mt-[10px] text-center text-[10px] text-transparent group-hover:text-white">
              TON
            </p>
          </a>
          <a
            href="/"
            className="group flex w-12 flex-col items-center border-[3px] border-transparent pt-3 text-[#585858] transition-all hover:border-t-primary-color hover:text-white"
          >
            <PagarMeLogo />
            <p className="mt-[10px] text-center text-[10px] text-transparent group-hover:text-white">
              PAGAR.ME
            </p>
          </a>
        </div>
      </div>
    </footer>
  )
}
