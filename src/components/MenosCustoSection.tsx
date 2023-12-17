import { Button } from '../components/Button'
import menosCustoImg from '../assets/stone-maquininha-de-cartao-menos-custos-mais-lucro-desktop.webp'
import menosCustoImgTablet from '../assets/stone-maquininha-de-cartao-menos-custos-mais-lucro-tablet.webp'
import menosCustoImgMobile from '../assets/stone-maquininha-de-cartao-menos-custos-mais-lucro-mobile.webp'
import Image from 'next/image'

export function MenosCustoSection() {
  return (
    <section
      id="menos-custo-para-seu-bolso"
      className="relative mt-10 flex min-h-[668px] justify-center bg-background4-color md:min-h-[588px] lg:min-h-[558px]"
    >
      <div className="absolute top-[-48px] m-auto flex max-w-7xl flex-col-reverse items-center justify-center px-6 md:top-[-40px] lg:top-[-80px] lg:flex-row">
        <div className="flex max-w-[312px] flex-col items-center justify-center pt-8 md:min-w-[404px] md:max-w-[472px] md:pt-6 lg:mr-4 lg:min-h-[558px] lg:max-w-[404px] lg:items-start lg:pt-[160px]">
          <p className="mb-1 mt-2 w-full text-center font-sharon-display text-sm font-semibold text-color-gray lg:mb-0 lg:text-left lg:text-base ">
            JUSTO PARA O SEU BOLSO
          </p>
          <h2 className="w-full text-center font-sharon-display text-4xl font-black text-color-dark-gray lg:text-left lg:text-5xl">
            Menos custo,{' '}
            <span className="font-sharon-display text-primary-color">
              Mais lucro
            </span>
          </h2>
          <p className="mb-4 mt-2 w-full text-center text-color-dark-gray md:text-base lg:text-left lg:text-lg">
            <span className="hidden lg:flex">
              Seu negócio gira com taxas personalizadas e você sabe exatamente
              tudo que está pagando
            </span>
            <span className="flex lg:hidden">
              Todas as soluções que você precisa, com taxas personalizadas pro
              seu negócio
            </span>
          </p>
          <Button
            secondary
            large
            href="/"
            className="w-full font-semibold md:w-auto"
          >
            Seja Stone
          </Button>
        </div>
        <picture className="max-w-[320px] md:max-w-[600px] lg:max-w-none">
          <Image
            src={menosCustoImg}
            alt="Maquininha de Cartão Stone, Aplicativo Stone e Cartão Stone."
            className="hidden lg:flex"
          />
          <Image
            src={menosCustoImgTablet}
            alt="Maquininha de Cartão Stone, Aplicativo Stone e Cartão Stone."
            className="hidden md:flex lg:hidden"
          />
          <Image
            src={menosCustoImgMobile}
            alt="Maquininha de Cartão Stone, Aplicativo Stone e Cartão Stone."
            className="flex md:hidden"
          />
        </picture>
      </div>
    </section>
  )
}
