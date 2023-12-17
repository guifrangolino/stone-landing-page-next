'use client'

import { useState } from 'react'
import { TotalmenteIntegradoSectionSelector } from './TotalmenteIntegradoSectionSelector'
import variasFormasImgMobile from '../assets/totalmenteIntegradoImages/stone-varias-formas-de-vender-pix-boleto-link-mobile.webp'
import gerencieSuaEquipeImgMobile from '../assets/totalmenteIntegradoImages/stone-gerencie-sua-equipe-mobile.webp'
import pagueSuasContasImgMobile from '../assets/totalmenteIntegradoImages/stone-pague-suas-contas-digital-mobile.webp'
import integreSeuNegocioImgMobile from '../assets/totalmenteIntegradoImages/stone-sistema-de-gestao-integrada-mobile.webp'
import { TotalmenteIntegradoSectionContent } from './TotalmenteIntegradoSectionContent'
import { ArrowLeft } from './Icons/ArrowLeft'
import { ArrowRight2 } from './Icons/ArrowRight2'
import Image from 'next/image'

export function TotalmenteIntegradoSection() {
  const [selected, setSelected] = useState<number>(0)

  function handleArrowRightClick() {
    if (selected < 3) setSelected((prev) => prev + 1)
  }

  function handleArrowLeftClick() {
    if (selected > 0) setSelected((prev) => prev - 1)
  }

  return (
    <section
      id="totalmente-integrado"
      className="my-10 flex flex-col items-center justify-center md:my-32 lg:mx-6 xl:mx-0"
    >
      <h2 className="mx-6 mb-4 max-w-[455px] text-center font-sharon-display text-[1.75rem] font-bold leading-10 text-color-dark-gray md:mx-auto md:mb-2 md:max-w-none lg:mx-6 lg:text-[2rem]">
        O único App que você vai precisar
      </h2>
      <p className="mb-4 text-center text-lg text-color-dark-gray md:mb-6 lg:text-xl">
        Com a Stone no seu celular, você tem o controle total do seu negócio nas
        suas mãos
      </p>
      <div className="flex w-full flex-col md:hidden">
        <div className="relative mx-auto mt-4 h-[240px] w-full max-w-[455px] overflow-hidden rounded-t-3xl">
          <Image
            src={variasFormasImgMobile}
            alt="Empreendedor segurando o celular e consultando o seu Pix no Aplicativo da Stone."
            className={`absolute h-full w-full object-cover ${
              selected === 0 ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <Image
            src={gerencieSuaEquipeImgMobile}
            alt="Empreendedora gerenciando a sua equipe através do seu computador. Em cima da mesa contém 2 maquininhas de cartões Stone e um vazo de plantas."
            className={`absolute h-full w-full object-cover ${
              selected === 1 ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <Image
            src={pagueSuasContasImgMobile}
            alt="Empreendedora segurando o celular e consultando a sua conta 100% Digital da Stone."
            className={`absolute h-full w-full object-cover ${
              selected === 2 ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <Image
            src={integreSeuNegocioImgMobile}
            alt="Empreendedora consultando o Sistema de Gestão Integrada da Stone em seu notebook. E em cima da mesa contém maquininha de cartão Stone, barbante, blusa e vazo de plantas."
            className={`absolute h-full w-full object-cover ${
              selected === 3 ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
      </div>
      {/* Selector */}
      <TotalmenteIntegradoSectionSelector
        selected={selected}
        setSelected={setSelected}
      />
      <TotalmenteIntegradoSectionContent selected={selected} />
      <div className="flex w-full justify-center bg-transparent md:hidden">
        <button
          className={`mr-[6px] h-10 w-10 ${
            selected === 0 ? 'cursor-not-allowed' : 'cursor-pointer'
          }`}
          onClick={() => handleArrowLeftClick()}
        >
          <ArrowLeft disabled={selected === 0} />
        </button>
        <button
          className={`ml-[6px] h-10 w-10 ${
            selected === 3 ? 'cursor-not-allowed' : 'cursor-pointer'
          }`}
          onClick={() => handleArrowRightClick()}
        >
          <ArrowRight2 disabled={selected === 3} />
        </button>
      </div>
    </section>
  )
}
