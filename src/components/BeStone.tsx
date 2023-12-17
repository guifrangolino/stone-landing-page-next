import { Button } from './Button'

export function BeStone() {
  return (
    <div className="w-full bg-background4-color px-6 py-10 md:py-20">
      <div className="mx-auto flex w-full max-w-[455px] flex-col justify-center md:max-w-none lg:max-w-[840px]">
        <h2 className="text-center font-sharon-display text-[2rem] font-bold leading-10 text-color-dark-gray lg:text-[2.5rem] lg:leading-[3rem]">
          São{' '}
          <span className="font-sharon-display text-primary-color">
            muitos motivos pra você contar com a gente
          </span>
          , né? Por onde você quer começar?
        </h2>
        <div className="mt-6 flex flex-col justify-center gap-4 md:flex-row">
          <Button href="/" large secondary className="font-semibold">
            Descubra suas taxas
          </Button>
          <Button
            href="/"
            large
            className="hidden bg-white font-semibold md:flex"
          >
            Abra sua conta
          </Button>
          <Button
            href="/"
            large
            secondary
            className="flex font-semibold md:hidden"
          >
            Abra sua conta
          </Button>
        </div>
      </div>
    </div>
  )
}
