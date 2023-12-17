import { CardMachine2 } from './Icons/CardMachine2'

export function PraVoceQueAutonomoMobile() {
  return (
    <div>
      <p className="px-4 pt-4 font-normal text-color-gray">
        Pra você que é autônomo
      </p>
      <div className="flex flex-col md:gap-1">
        <a
          href="/"
          className="group m-4 flex items-center pr-2 text-sm text-color-dark-gray"
        >
          <div className="group-hover:text-primary-color">
            <CardMachine2 />
          </div>
          <div className="ml-3">
            <p className="font-medium">Ton</p>
            <p className="mt-[2px] text-sm font-normal text-color-gray">
              Ton é da Stone pro autônomo
            </p>
          </div>
        </a>
      </div>
    </div>
  )
}
