import greenAngels from '../assets/stone-green-angels-desktop.webp'
import greenAngelsTablet from '../assets/stone-green-angels-tablet.webp'
import greenAngelsMobile from '../assets/stone-green-angels-mobile.webp'
import { Button } from '../components/Button'
import { Medal2 } from '../components/Icons/Medal2'
import { Medal } from '../components/Icons/Medal'
import { QualitySeal } from '../components/Icons/QualitySeal'
import Image from 'next/image'

export function Numero1EmAtendimento() {
  return (
    <section id="numero-1-em-atendimento">
      <picture className="relative flex h-[213px] w-full md:h-[395px] lg:h-[466px]">
        <Image
          src={greenAngels}
          alt="Green Angels Stone ao lado de Empreendedora"
          className="hidden h-full object-cover lg:flex"
        />
        <Image
          src={greenAngelsTablet}
          alt="Green Angels Stone ao lado de Empreendedora"
          className="hidden h-full w-full object-cover md:flex lg:hidden"
        />
        <Image
          src={greenAngelsMobile}
          alt="Green Angels Stone ao lado de Empreendedora"
          className="flex h-full w-full object-cover md:hidden"
        />
      </picture>
      <div className="mx-6 mb-10 md:mb-0">
        <div className="relative m-auto mt-6 flex max-w-[1060px] flex-col items-center gap-6 bg-white sm:p-6 md:mt-[-134px] md:rounded-2xl md:border-2 md:border-border-color md:p-10 lg:mb-[60px] lg:mt-[-163px] lg:flex-row">
          <div className="flex flex-col justify-center lg:max-w-[387px]">
            <p className="text-center text-sm font-semibold text-color-gray md:text-base lg:text-left">
              MELHOR SUPORTE DO PAÍS
            </p>
            <h2 className="pt-2 text-center font-sharon-display text-2xl font-bold text-color-dark-gray md:text-[1.75rem] md:leading-[3rem] lg:text-left">
              Número 1 em atendimento
            </h2>
            <p className="pt-2 text-center text-base font-normal text-color-dark-gray md:text-lg lg:text-left">
              24 horas atendendo em 5 segundos pelo telefone ou WhatsApp. E se
              precisar nossos Agentes vão até o seu balcão em todo Brasil
            </p>
            <div className="hidden pt-6 lg:flex">
              <Button href="/" secondary large className="font-semibold">
                Fale com a gente
              </Button>
            </div>
          </div>
          <div className="mt-6 flex w-full flex-col items-center md:mt-0 lg:ml-auto lg:max-w-[488px]">
            <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 lg:grid-cols-2">
              {/* Primeiro */}
              <div className="min-w-[152px] rounded-[8px] bg-background4-color px-2 py-4 text-center md:rounded-2xl lg:p-2">
                <p className="text-sm font-normal md:text-base">Reconhecido</p>
                <div className="flex items-center justify-center">
                  <Medal />
                  <div className="ml-[3px] flex flex-col items-start justify-start font-sharon-display text-color-dark-gray">
                    <QualitySeal />
                    <p className="pt-1 font-sharon-display leading-[1.5rem]">
                      <span className="font-sharon-display text-[2rem] font-bold">
                        9.0
                      </span>
                      <span className="font-sharon-display text-xl">/10</span>
                    </p>
                  </div>
                </div>
              </div>
              {/* Segundo */}
              <div className="min-w-[152px] rounded-[8px] bg-background4-color px-2 py-4 text-center text-color-dark-gray md:rounded-2xl lg:p-2">
                <p className="text-sm font-normal md:text-base">Mais de</p>
                <p className="font-sharon-display text-[2rem] font-bold leading-[3rem] md:text-[2.5rem]">
                  3.700
                </p>
                <p className="text-sm font-normal md:text-base">agentes</p>
              </div>
              {/* Terceiro */}
              <div className="min-w-[152px] rounded-[8px] bg-background4-color px-2 py-4 text-center text-color-dark-gray md:rounded-2xl lg:p-2">
                <p className="text-sm font-normal md:text-base">
                  Atendimento em
                </p>
                <p className="font-sharon-display text-[2rem] font-bold leading-[3rem] md:text-[2.5rem]">
                  5
                </p>
                <p className="text-sm font-normal md:text-base">segundos</p>
              </div>
              {/* Quarto */}
              <div className="min-w-[152px] rounded-[8px] bg-background4-color px-2 py-4 text-center text-color-dark-gray md:rounded-2xl lg:p-2">
                <p className="text-sm font-normal md:text-base">Em mais de</p>
                <p className="font-sharon-display text-[2rem] font-bold leading-[3rem] md:text-[2.5rem]">
                  5.500
                </p>
                <p className="text-sm font-normal md:text-base">cidades</p>
              </div>
            </div>
            <div className="flex pt-4">
              <Medal2 />
              <p className="pl-1 font-sharon-display text-base font-medium text-primary-color md:text-xl">
                O melhor atendimento da indústria
              </p>
            </div>
            <div className="flex w-full pt-6 md:w-auto lg:hidden">
              <Button href="/" secondary large className="w-full font-semibold">
                Fale com a gente
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
