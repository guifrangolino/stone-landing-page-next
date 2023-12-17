import 'keen-slider/keen-slider.min.css'
import kermit1 from '../assets/fotosPerfil/kermit1.jpg'
import kermit2 from '../assets/fotosPerfil/kermit2.png'
import kermit3 from '../assets/fotosPerfil/kermit3.jpg'
import kermit4 from '../assets/fotosPerfil/kermit4.png'
import kermit5 from '../assets/fotosPerfil/kermit5.jpg'
import kermit6 from '../assets/fotosPerfil/kermit6.jpg'
import kermit7 from '../assets/fotosPerfil/kermit7.jpeg'
import kermit8 from '../assets/fotosPerfil/kermit8.jpg'
import Image from 'next/image'

type TestimonialMaquinaDeCartaoSliderProps = {
  sliderRef: (node: HTMLDivElement | null) => void
}

export function TestimonialMaquinaDeCartaoSlider({
  sliderRef,
}: TestimonialMaquinaDeCartaoSliderProps) {
  return (
    <div
      ref={sliderRef}
      className="keen-slider keen-slider m-[2px] flex max-w-full overflow-hidden"
    >
      <div className="keen-slider__slide flex w-[345px] flex-col gap-2 rounded-2xl bg-background4-color p-4 lg:gap-3">
        <div className="flex">
          <div className="h-12 w-12 min-w-[48px] overflow-hidden rounded-lg">
            <Image
              alt=""
              src={kermit1}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-bold text-color-dark-gray">
              Kermit Ferreira
            </p>
            <p className="text-display-500 mt-2 text-sm text-btn-border-color">
              @kermitf
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <p>
            minha irmã foi fazer uma ligação e tocou a musiquinha clássica né,
            aí ela perguntou “lá na Stone qual é a musiquinha que toca?” quando
            eu falei que n toca pq o cliente é atendido em 5s ela não acreditou,
            tive que ligar na frente dela KKKKKKKKK aí{' '}
            <span className="text-primary-color">@SejaStone</span>, vê se pode?
            😂
          </p>
        </div>
      </div>
      {/**/}
      <div className="keen-slider__slide flex w-[345px] flex-col gap-2 rounded-2xl bg-background4-color p-4 lg:gap-3">
        <div className="flex">
          <div className="h-12 w-12 min-w-[48px] overflow-hidden rounded-lg">
            <Image
              alt=""
              src={kermit2}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-bold text-color-dark-gray">Kermm</p>
            <p className="text-display-500 mt-2 text-sm text-btn-border-color">
              @kermmvazquez
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <p>
            Só quero enaltecer aqui o atendimento da{' '}
            <span className="text-primary-color">@SejaStone</span> em particular
            a Priscila e a Tamires (peço perdão se não for assim que se escreve
            o nome delas) pela ABSURDA paciência em lidar com minha burrice. Amo
            vocês, meninas ❤
          </p>
        </div>
      </div>
      {/**/}
      <div className="keen-slider__slide flex w-[345px] flex-col gap-2 rounded-2xl bg-background4-color p-4 lg:gap-3">
        <div className="flex">
          <div className="h-12 w-12 min-w-[48px] overflow-hidden rounded-lg">
            <Image
              alt=""
              src={kermit3}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-bold text-color-dark-gray">
              Missionário Kermit Francisco
            </p>
            <p className="text-display-500 mt-2 text-sm text-btn-border-color">
              @kermtmissionari
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <p>
            E o melhor banco que já usei Já faz um tempo que uso o banco{' '}
            <span className="text-primary-color">@SejaStone</span> o atendimento
            e super rápido segurança no login toda vez que entro em minha conta
            pelo computador tenho que dá permissão isso é ótimo evita que outras
            pessoas use minha conta
          </p>
        </div>
      </div>
      {/**/}
      <div className="keen-slider__slide flex w-[345px] flex-col gap-2 rounded-2xl bg-background4-color p-4 lg:gap-3">
        <div className="flex">
          <div className="h-12 w-12 min-w-[48px] overflow-hidden rounded-lg">
            <Image
              alt=""
              src={kermit4}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-bold text-color-dark-gray">Kermit 🦋</p>
            <p className="text-display-500 mt-2 text-sm text-btn-border-color">
              @KermmRibeiros2
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <p>
            Minha maquininha chegou da{' '}
            <span className="text-primary-color">@SejaStone</span> sério, estou
            tão feliz que até chorei! Deus abençoando sempre, um passinho de
            cada vez, eu chego lá! Gratidão 🙏🏼♥️
          </p>
        </div>
      </div>
      {/**/}
      <div className="keen-slider__slide flex w-[345px] flex-col gap-2 rounded-2xl bg-background4-color p-4 lg:gap-3">
        <div className="flex">
          <div className="h-12 w-12 min-w-[48px] overflow-hidden rounded-lg">
            <Image
              alt=""
              src={kermit5}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-bold text-color-dark-gray">
              Kermit Calandrine
            </p>
            <p className="text-display-500 mt-2 text-sm text-btn-border-color">
              @kekermlandrine
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <p>
            Fazendo um cadastro na{' '}
            <span className="text-primary-color">@SejaStone</span> pelo Whats.
            Nada de robô. Atendimento rápido e ótimo. Mandei até figurinha!
            Hihi!! Arrasaram!
          </p>
        </div>
      </div>
      {/**/}
      <div className="keen-slider__slide flex w-[345px] flex-col gap-2 rounded-2xl bg-background4-color p-4 lg:gap-3">
        <div className="flex">
          <div className="h-12 w-12 min-w-[48px] overflow-hidden rounded-lg">
            <Image
              alt=""
              src={kermit6}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-bold text-color-dark-gray">
              Kermit Junior
            </p>
            <p className="text-display-500 mt-2 text-sm text-btn-border-color">
              @kermitjr
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <p>
            É impressionante a facilidade de compreensão do extrato atual e
            futuros lançamentos do Banco{' '}
            <span className="text-primary-color">@SejaStone</span> quando
            comparo com o confuso extrato do @bancoconcorrente. E o mais
            impressionante, sabe quanto eu pago ao Stone? Absolutamente NADA!
            Parabéns ao Stone, zero reclamações.
          </p>
        </div>
      </div>
      {/**/}
      <div className="keen-slider__slide flex w-[345px] flex-col gap-2 rounded-2xl bg-background4-color p-4 lg:gap-3">
        <div className="flex">
          <div className="h-12 w-12 min-w-[48px] overflow-hidden rounded-lg">
            <Image
              alt=""
              src={kermit7}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-bold text-color-dark-gray">
              Kermit HP Bender
            </p>
            <p className="text-display-500 mt-2 text-sm text-btn-border-color">
              @kermit_hp
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <p>
            <span className="text-primary-color">@SejaStone</span>: Entro em
            contato com o whatsapp, me informam que até segunda chega a
            maquineta nova. Pergunto se vai precisar de algum outro dado,
            respondem com &quot;seu Paulo, a gente já se conhece&quot;. Ah, e as
            taxas são bem menores.
          </p>
        </div>
      </div>
      {/**/}
      <div className="keen-slider__slide flex w-[345px] flex-col gap-2 rounded-2xl bg-background4-color p-4 lg:gap-3">
        <div className="flex">
          <div className="h-12 w-12 min-w-[48px] overflow-hidden rounded-lg">
            <Image
              alt=""
              src={kermit8}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-bold text-color-dark-gray">Kermitin</p>
            <p className="text-display-500 mt-2 text-sm text-btn-border-color">
              @clbrsnts
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <p>
            adoro o atendimento da{' '}
            <span className="text-primary-color">@SejaStone</span>, o melhor
            disparado.
          </p>
        </div>
      </div>
    </div>
  )
}
