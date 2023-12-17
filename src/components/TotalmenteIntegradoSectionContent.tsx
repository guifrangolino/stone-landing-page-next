import variasFormasImg from '../assets/totalmenteIntegradoImages/stone-varias-formas-de-vender-pix-boleto-link-desktop.webp'
import variasFormasImgTablet from '../assets/totalmenteIntegradoImages/stone-varias-formas-de-vender-pix-boleto-link-tablet.webp'
import gerencieSuaEquipeImg from '../assets/totalmenteIntegradoImages/stone-gerencie-sua-equipe-desktop.webp'
import gerencieSuaEquipeImgTablet from '../assets/totalmenteIntegradoImages/stone-gerencie-sua-equipe-tablet.webp'
import pagueSuasContasImg from '../assets/totalmenteIntegradoImages/stone-pague-suas-contas-digital-desktop.webp'
import pagueSuasContasImgTablet from '../assets/totalmenteIntegradoImages/stone-pague-suas-contas-digital-tablet.webp'
import integreSeuNegocioImg from '../assets/totalmenteIntegradoImages/stone-sistema-de-gestao-integrada-desktop.webp'
import integreSeuNegocioImgTablet from '../assets/totalmenteIntegradoImages/stone-sistema-de-gestao-integrada-tablet.webp'
import { Button } from './Button'
import Image from 'next/image'

type TotalmenteIntegradoSectionContentProps = {
  selected: number
}

export function TotalmenteIntegradoSectionContent({
  selected,
}: TotalmenteIntegradoSectionContentProps) {
  return (
    <div className="relative mx-6 mt-6 h-[300px] w-full max-w-full md:mt-0 md:h-[344px] md:max-w-[768px] md:overflow-hidden md:px-6 lg:h-[422px] lg:max-w-[1060px] lg:px-0">
      {/**/}
      <div
        className={`absolute flex h-full w-full items-stretch justify-center overflow-hidden rounded-3xl md:justify-normal md:p-6 md:py-3 lg:rounded-[40px] lg:px-10 lg:py-6 ${
          selected === 0 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <picture className="absolute left-0 top-0 h-full w-full">
          <Image
            src={variasFormasImg}
            alt="Empreendedor segurando o celular e consultando o seu Pix no Aplicativo da Stone."
            className="hidden h-full w-full lg:block"
          />
          <Image
            src={variasFormasImgTablet}
            alt="Empreendedor segurando o celular e consultando o seu Pix no Aplicativo da Stone."
            className="hidden h-full w-full md:block lg:hidden"
          />
        </picture>
        <div className="z-[1] w-full max-w-[455px] px-6 text-left md:mt-0 md:max-w-[362px] md:rounded-2xl md:bg-white md:p-[23px] lg:max-w-[455px] lg:rounded-3xl lg:p-10">
          <p className="mb-4 text-sm font-bold uppercase text-color-gray lg:text-base">
            Principais formas de pagamento
          </p>
          <h4 className="mb-2 font-sharon-display text-2xl font-bold leading-9 text-color-dark-gray md:leading-[32px] lg:text-[1.75rem] lg:leading-9">
            Venda de diversas formas e receba o valor em 1 dia
          </h4>
          <p className="mb-4 text-base text-color-dark-gray lg:text-lg">
            Maquininha com garantia vitalícia, chega em 1 dia no seu balcão.
            Acompanhe tudo em tempo real pelo app e venda de onde estiver com
            pix, link ou boleto
          </p>
          <Button
            href="/"
            large
            secondary
            className="w-full font-semibold lg:w-auto"
          >
            Seja Stone
          </Button>
        </div>
      </div>
      {/**/}
      <div
        className={`absolute flex h-full w-full items-stretch justify-center overflow-hidden rounded-3xl md:justify-normal md:p-6 md:py-3 lg:rounded-[40px] lg:px-10 lg:py-6 ${
          selected === 1 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <picture className="absolute left-0 top-0 h-full w-full">
          <Image
            src={gerencieSuaEquipeImg}
            alt="Empreendedora gerenciando a sua equipe através do seu computador. Em cima da mesa contém 2 maquininhas de cartões Stone e um vazo de plantas."
            className="hidden h-full w-full lg:block"
          />
          <Image
            src={gerencieSuaEquipeImgTablet}
            alt="Empreendedora gerenciando a sua equipe através do seu computador. Em cima da mesa contém 2 maquininhas de cartões Stone e um vazo de plantas."
            className="hidden h-full w-full md:block lg:hidden"
          />
        </picture>
        <div className="z-[1] w-full max-w-[455px] px-6 text-left md:mt-0 md:max-w-[362px] md:rounded-2xl md:bg-white md:p-[23px] lg:max-w-[455px] lg:rounded-3xl lg:p-10">
          <p className="mb-4 text-sm font-bold uppercase text-color-gray lg:text-base">
            de onde estiver
          </p>
          <h4 className="mb-2 font-sharon-display text-2xl font-bold leading-9 text-color-dark-gray md:leading-[32px] lg:text-[1.75rem] lg:leading-9">
            Dê acessos personalizados a sua equipe
          </h4>
          <p className="mb-4 text-base text-color-dark-gray lg:text-lg">
            Aumente segurança e controle do seu negócio e ganhe mais eficiência
            e tempo com seu time podendo fazer transações
          </p>
          <Button
            href="/"
            large
            secondary
            className="w-full font-semibold lg:w-auto"
          >
            Seja Stone
          </Button>
        </div>
      </div>
      {/**/}
      <div
        className={`absolute flex h-full w-full items-stretch justify-center overflow-hidden rounded-3xl md:justify-normal md:p-6 md:py-3 lg:rounded-[40px] lg:px-10 lg:py-6 ${
          selected === 2 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <picture className="absolute left-0 top-0 h-full w-full">
          <Image
            src={pagueSuasContasImg}
            alt="Empreendedora segurando o celular e consultando a sua conta 100% Digital da Stone."
            className="hidden h-full w-full lg:block"
          />
          <Image
            src={pagueSuasContasImgTablet}
            alt="Empreendedora segurando o celular e consultando a sua conta 100% Digital da Stone."
            className="hidden h-full w-full md:block lg:hidden"
          />
        </picture>
        <div className="z-[1] w-full max-w-[455px] px-6 text-left md:mt-0 md:max-w-[362px] md:rounded-2xl md:bg-white md:p-[23px] lg:max-w-[455px] lg:rounded-3xl lg:p-10">
          <p className="mb-4 text-sm font-bold uppercase text-color-gray lg:text-base">
            Pra quem tem negócio
          </p>
          <h4 className="mb-2 font-sharon-display text-2xl font-bold leading-9 text-color-dark-gray md:leading-[32px] lg:text-[1.75rem] lg:leading-9">
            Conta empresa 100% digital pra deixar tudo mais rápido
          </h4>
          <p className="mb-4 text-base text-color-dark-gray lg:text-lg">
            Pague fornecedores, contas e tributos com e sem código de barras,
            transfira com praticidade, além de ter o buscador de boletos para
            centralizar as cobranças
          </p>
          <Button
            href="/"
            large
            secondary
            className="w-full font-semibold lg:w-auto"
          >
            Seja Stone
          </Button>
        </div>
      </div>
      {/**/}
      <div
        className={`absolute flex h-full w-full items-stretch justify-center overflow-hidden rounded-3xl md:justify-normal md:p-6 md:py-3 lg:rounded-[40px] lg:px-10 lg:py-6 ${
          selected === 3 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <picture className="absolute left-0 top-0 h-full w-full">
          <Image
            src={integreSeuNegocioImg}
            alt="Empreendedora consultando o Sistema de Gestão Integrada da Stone em seu notebook. E em cima da mesa contém maquininha de cartão Stone, barbante, blusa e vazo de plantas."
            className="hidden h-full w-full lg:block"
          />
          <Image
            src={integreSeuNegocioImgTablet}
            alt="Empreendedora consultando o Sistema de Gestão Integrada da Stone em seu notebook. E em cima da mesa contém maquininha de cartão Stone, barbante, blusa e vazo de plantas."
            className="hidden h-full w-full md:block lg:hidden"
          />
        </picture>
        <div className="z-[1] w-full max-w-[455px] px-6 text-left md:mt-0 md:max-w-[362px] md:rounded-2xl md:bg-white md:p-[23px] lg:max-w-[455px] lg:rounded-3xl lg:p-10">
          <p className="mb-4 text-sm font-bold uppercase text-color-gray lg:text-base">
            Tudo conectado
          </p>
          <h4 className="mb-2 font-sharon-display text-2xl font-bold leading-9 text-color-dark-gray md:leading-[32px] lg:text-[1.75rem] lg:leading-9">
            Gestão integrada pra acelerar seu negócio
          </h4>
          <p className="mb-4 text-base text-color-dark-gray lg:text-lg">
            Mais de 90 sistemas que se integram com a maquininha da Stone pra
            otimizar o fluxo do seu negócio de ponta a ponta
          </p>
          <Button
            href="/"
            large
            secondary
            className="w-full font-semibold lg:w-auto"
          >
            Seja Stone
          </Button>
        </div>
      </div>
    </div>
  )
}
