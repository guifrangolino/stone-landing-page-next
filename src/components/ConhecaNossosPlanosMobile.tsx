import Image from 'next/image'
import conheçaNossosPlanosImg from '../assets/solucao-completa-2.webp'
import { ArrowRight } from './Icons/ArrowRight'

export function ConhecaNossosPlanosMobile() {
  return (
    <div className="pt-4">
      <a
        href="/"
        className="group mx-4 mb-6 flex overflow-hidden rounded-2xl bg-background4-color p-4 md:w-[468px] md:p-0"
      >
        <div className="w-full max-w-[136px] md:max-w-[270px]">
          <Image
            src={conheçaNossosPlanosImg}
            alt="Conheça nossos planos"
            className="h-[88px] min-w-[136px] rounded-lg md:h-auto md:rounded-none object-cover"
          />
        </div>
        <div className="flex flex-col justify-center md:p-4">
          <p className="pl-4 font-sharon-display text-base font-bold leading-[22px] text-color-dark-gray group-hover:text-primary-color md:w-[219px] md:p-0 md:text-xl md:leading-7 md:group-hover:text-color-dark-gray">
            Maquininha sem aluguel e Planos que não pesam nas despesas
          </p>
          <p className="hidden w-max items-center border-b pt-2 text-primary-color group-hover:border-primary-color group-hover:text-primary-hover-color md:flex">
            <span>Conheça nossos Planos</span>
            <span>
              <ArrowRight />
            </span>
          </p>
        </div>
      </a>
    </div>
  )
}
