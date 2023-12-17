import { ArrowRight } from './Icons/ArrowRight'
import { Smartphone } from './Icons/Smartphone'
import { UserDialog2 } from './Icons/UserDialog2'
import { Users2 } from './Icons/Users2'

export function LinksInternos() {
  return (
    <div className="bg-background5-color w-full px-6 py-10 lg:px-10 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1060px] flex-col items-center justify-center gap-10 md:flex-row md:items-stretch">
        {/**/}
        <div className="flex w-full max-w-[510px] flex-1 flex-col">
          <div className="h-10 w-10 text-span-color">
            <UserDialog2 fullWidth />
          </div>
          <h6 className="mt-2 font-sharon-display text-xl font-bold text-white">
            Fale com a gente
          </h6>
          <p className="mt-1 text-white">Seja atendido pelo nosso time</p>
          <a
            href="/"
            className="mt-2 flex w-max items-center font-semibold text-span-color hover:text-primary-color"
          >
            <p className="text-base font-semibold text-current">Atendimento</p>
            <ArrowRight />
          </a>
        </div>
        {/**/}
        <div className="flex w-full max-w-[510px] flex-1 flex-col">
          <div className="h-10 w-10 text-span-color">
            <Users2 fullWidth />
          </div>
          <h6 className="mt-2 font-sharon-display text-xl font-bold text-white">
            Trabalhe conosco
          </h6>
          <p className="mt-1 text-white">
            Transforme seu potencial em potência
          </p>
          <a
            href="/"
            className="mt-2 flex w-max items-center font-semibold text-span-color hover:text-primary-color"
          >
            <p className="text-base font-semibold text-current">Conheça</p>
            <ArrowRight />
          </a>
        </div>
        {/**/}
        <div className="flex w-full max-w-[510px] flex-1 flex-col">
          <div className="h-10 w-10 text-span-color">
            <Smartphone fullWidth />
          </div>
          <h6 className="mt-2 font-sharon-display text-xl font-bold text-white">
            E-commerce
          </h6>
          <p className="mt-1 text-white">
            Soluções pra quem já tem loja virtual
          </p>
          <a
            href="/"
            className="mt-2 flex w-max items-center font-semibold text-span-color hover:text-primary-color"
          >
            <p className="text-base font-semibold text-current">Conheça</p>
            <ArrowRight />
          </a>
        </div>
      </div>
    </div>
  )
}
