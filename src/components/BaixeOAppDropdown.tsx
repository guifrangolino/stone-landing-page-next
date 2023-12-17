import { AppQRCode } from './Icons/AppQRCode'
import googlePlay from '../assets/googleplay.webp'
import appleStore from '../assets/appstore.webp'
import Image from 'next/image'

export function BaixeOAppDropdown() {
  return (
    <div className="invisible absolute right-0 top-[63px] flex w-[345px] max-w-7xl flex-col items-center rounded-b-2xl border-t-[1px] border-border-color bg-white py-4 pl-[1px] opacity-0 shadow-menuDrop transition-opacity group-hover:visible group-hover:opacity-100">
      <div className="flex flex-col items-center p-4">
        <p className="mb-2 font-semibold">
          Escaneie com a câmera do seu celular:
        </p>
        <div className="pt-4">
          <AppQRCode />
        </div>
      </div>
      <hr className="my-2 h-[1px] w-full border-border-color" />
      <div className="flex flex-col items-center p-4">
        <p className="mb-2 font-semibold">Ou acesse abaixo:</p>
        <div className="flex gap-2">
          <a href="/">
            <Image
              src={googlePlay}
              alt="Google Play Download"
              className="w-[152px]"
            />
          </a>
          <a href="/">
            <Image
              src={appleStore}
              alt="Apple Store Download"
              className="w-[152px]"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
