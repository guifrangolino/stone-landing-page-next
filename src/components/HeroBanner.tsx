import bannerDesktop from '../assets/stone-banner-home-desktop.webp'
import bannerTablet from '../assets/stone-banner-home-tablet.webp'
import bannerMobile from '../assets/stone-banner-home-mobile.webp'
import { Button } from './Button'
import Image from 'next/image'

export function HeroBanner() {
  return (
    <div className="relative h-[581px] w-full overflow-hidden rounded-b-3xl bg-[#074538] md:h-[511px]">
      <picture>
        <source srcSet={bannerDesktop.src} media="(min-width: 1025px)" />
        <source srcSet={bannerTablet.src} media="(min-width: 768px)" />
        <Image
          src={bannerMobile}
          alt="Mulher sentada e trabalhando no seu notebook e em cima da mesa contém maquininha de cartão Stone, caderno, tesoura, barbante, lápis, blusa e vazo de plantas"
          className="h-[340px] w-full object-cover md:h-full"
        />
      </picture>
      {/* conteúdo */}
      <div className="absolute left-1/2 top-0 z-[1] h-full w-full max-w-7xl -translate-x-1/2 p-4 md:p-6 lg:p-10 xl:px-4">
        <div className="flex h-full w-full items-end rounded-2xl border-4 border-primary-color md:justify-start md:border-[6px] lg:items-center lg:rounded-3xl">
          <div className="m-6 flex flex-col md:m-10 lg:m-20">
            <div className="text-white md:max-w-[320px] lg:max-w-[387px]">
              <h1 className="font-sharon-display text-4xl font-black leading-[44px] lg:text-5xl lg:leading-[56px]">
                Tudo pro seu negócio girar
              </h1>
              <p className="mt-2 text-lg font-normal leading-[26px] md:mt-4">
                Maquininha, conta PJ e cartão no mesmo app, além de toda sua
                gestão integrada
              </p>
            </div>
            <div className="mt-4 flex w-full flex-col md:mt-6 md:flex-row">
              <Button secondary large href="/" className="font-semibold">
                Contrate Stone
              </Button>
              <a
                href="tel:3004 9681"
                className="flex flex-col items-center pt-4 md:items-start md:pl-6 md:pt-0"
              >
                <p className="text-center text-sm font-normal text-span-color md:text-left">
                  Atendimento em 5 segundos
                </p>
                <span className="text-center text-2xl font-bold text-white md:text-left">
                  3004 9681
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="533:bg-hero-mobile bg-hero-mobile-break md:bg-hero-tablet absolute left-0 top-0 h-full w-full lg:bg-hero-full"></div>
    </div>
  )
}
