import pluxee from '../assets/bandeiras/vouchers/pluxee.webp'
import ticket from '../assets/bandeiras/vouchers/ticket.webp'
import vr from '../assets/bandeiras/vouchers/vr.webp'
import alelo from '../assets/bandeiras/vouchers/alelo.webp'
import ben from '../assets/bandeiras/vouchers/ben.webp'
import biq from '../assets/bandeiras/vouchers/biq.webp'
import cooper from '../assets/bandeiras/vouchers/cooper.webp'
import green from '../assets/bandeiras/vouchers/green.webp'
import sorocred from '../assets/bandeiras/vouchers/sorocred.webp'
import vale from '../assets/bandeiras/vouchers/vale.webp'
import verdcard from '../assets/bandeiras/vouchers/verdcard.webp'
import abrapetite from '../assets/bandeiras/vouchers/abrapetite.webp'
import viasoft from '../assets/bandeiras/vouchers/viasoft.webp'
import uauh from '../assets/bandeiras/vouchers/uauh.webp'
import vegas from '../assets/bandeiras/vouchers/vegas.webp'
import volus from '../assets/bandeiras/vouchers/volus.webp'
import Image from 'next/image'

export function FormasDePagamentoBandeirasVouchers() {
  return (
    <div className="flex flex-wrap justify-center gap-2 pt-1">
      <div className="h-[30px] w-[45px] lg:h-[38px] lg:w-[56px]">
        <Image src={pluxee} alt="Bandeira Pluxee" />
      </div>
      <div className="h-[30px] w-[45px] lg:h-[38px] lg:w-[56px]">
        <Image src={ticket} alt="Bandeira Ticket" />
      </div>
      <div className="h-[30px] w-[45px] lg:h-[38px] lg:w-[56px]">
        <Image src={vr} alt="Bandeira Vr" />
      </div>
      <div className="h-[30px] w-[45px] lg:h-[38px] lg:w-[56px]">
        <Image src={alelo} alt="Bandeira Alelo" />
      </div>
      <div className="h-[30px] w-[45px] lg:h-[38px] lg:w-[56px]">
        <Image src={ben} alt="Bandeira Ben" />
      </div>
      <div className="h-[30px] w-[45px] lg:h-[38px] lg:w-[56px]">
        <Image src={biq} alt="Bandeira Biq" />
      </div>
      <div className="h-[30px] w-[45px] lg:h-[38px] lg:w-[56px]">
        <Image src={cooper} alt="Bandeira Cooper" />
      </div>
      <div className="h-[30px] w-[45px] lg:h-[38px] lg:w-[56px]">
        <Image src={green} alt="Bandeira Greencard" />
      </div>
      <div className="h-[30px] w-[45px] lg:h-[38px] lg:w-[56px]">
        <Image src={sorocred} alt="Bandeira SoroCred" />
      </div>
      <div className="h-[30px] w-[45px] lg:h-[38px] lg:w-[56px]">
        <Image src={vale} alt="Bandeira ValeCard" />
      </div>
      <div className="h-[30px] w-[45px] lg:h-[38px] lg:w-[56px]">
        <Image src={verdcard} alt="Bandeira VerdCard" />
      </div>
      <div className="h-[30px] w-[45px] lg:h-[38px] lg:w-[56px]">
        <Image src={abrapetite} alt="Bandeira Abrapetite" />
      </div>
      <div className="h-[30px] w-[45px] lg:h-[38px] lg:w-[56px]">
        <Image src={viasoft} alt="Bandeira Viasoft" />
      </div>
      <div className="h-[30px] w-[45px] lg:h-[38px] lg:w-[56px]">
        <Image src={uauh} alt="Bandeira Uauh beneficios" />
      </div>
      <div className="h-[30px] w-[45px] lg:h-[38px] lg:w-[56px]">
        <Image src={vegas} alt="Bandeira Vegas" />
      </div>
      <div className="h-[30px] w-[45px] lg:h-[38px] lg:w-[56px]">
        <Image src={volus} alt="Bandeira Volus" />
      </div>
    </div>
  )
}
