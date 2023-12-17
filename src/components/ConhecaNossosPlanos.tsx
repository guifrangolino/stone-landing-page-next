import Image from 'next/image'
import conheçaNossosPlanosImg from '../assets/solucao-completa.webp'
import { ArrowRight } from './Icons/ArrowRight'

export function ConhecaNossosPlanos() {
  return (
    <a
      href="/"
      className="group/box block w-[258px] cursor-pointer xl:w-[290px]"
    >
      <Image
        src={conheçaNossosPlanosImg}
        alt="Conheça nossos planos"
        className="h-[150px] w-full rounded-t-2xl"
      />
      <div className="flex flex-col rounded-b-2xl bg-background4-color p-4">
        <h6 className="pb-2 font-sharon-display text-xl font-bold text-color-dark-gray group-hover/box:text-primary-color">
          Escolha o Plano Stone que mais combina com o seu negócio
        </h6>
        <p className="text-sm font-normal">
          Maquininha sem aluguel, conta grátis e cartão sem mensalidade
        </p>
        <p className="flex justify-center self-start border-b pt-4 text-base font-medium text-primary-color group-hover/box:border-primary-hover-color group-hover/box:text-primary-hover-color">
          <span>Conheça nossos Planos</span>{' '}
          <span>
            <ArrowRight />
          </span>
        </p>
      </div>
    </a>
  )
}
