import levisLogo from '../assets/companiesLogos/logo-levis.webp'
import levisAlphabeto from '../assets/companiesLogos/logo-alphabeto.webp'
import levisMocellinSteak from '../assets/companiesLogos/logo-mocellin-steak.webp'
import levisMelissa from '../assets/companiesLogos/logo-melissa.webp'
import levisMiniso from '../assets/companiesLogos/logo-miniso.webp'
import levisJulietto from '../assets/companiesLogos/logo-julietto.webp'
import Image from 'next/image'

export function ParceriasSection() {
  return (
    <div className="flex w-full justify-center px-6">
      <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-6 pb-10 pt-10 lg:pb-20">
        <h2 className="px-[10px] text-center font-sharon-display text-[32px] font-bold text-color-dark-gray 2sm:px-0 lg:text-[40px]">
          Parceira de mais de{' '}
          <span className="font-sharon-display text-primary-color">
            1 milhão de negócios
          </span>{' '}
          por todo Brasil
        </h2>

        <div className="3sm:gap-x-[10px] flex h-[200px] w-full flex-wrap justify-between py-8 2sm:gap-x-[65px] sm:gap-x-[110px] md:h-auto md:gap-x-[0] lg:flex-nowrap">
          <div className="flex h-[104px] max-w-[79px] items-center md:h-[70px] lg:max-w-[96px]">
            <Image
              src={levisLogo}
              alt="Logo Levi's"
              className="h-full object-contain"
            />
          </div>
          <div className="flex h-[104px] max-w-[138px] items-center md:h-[70px] lg:max-w-[167px]">
            <Image
              src={levisAlphabeto}
              alt="Logo Alphabeto"
              className="h-full object-contain"
            />
          </div>
          <div className="flex h-[70px] max-w-[78px] items-center lg:max-w-[93px]">
            <Image
              src={levisMocellinSteak}
              alt="Logo Mocellin Steak"
              className="h-full object-contain"
            />
          </div>
          <div className="flex h-[70px] max-w-[102px] items-center lg:max-w-[122px]">
            <Image
              src={levisMelissa}
              alt="Logo Melissa"
              className="h-full object-contain"
            />
          </div>
          <div className="flex h-[70px] max-w-[46px] items-center lg:max-w-[56px]">
            <Image
              src={levisMiniso}
              alt="Logo Miniso"
              className="h-full object-contain"
            />
          </div>
          <div className="flex h-[70px] max-w-[127px] items-center lg:max-w-[156px]">
            <Image
              src={levisJulietto}
              alt="Logo Julietto"
              className="h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
