import { CreditCard } from './Icons/CreditCard'
import { Dollar2 } from './Icons/Dollar2'
import { QRCode } from './Icons/QRCode'
import { Database } from './Icons/Database'
import { Chart } from './Icons/Chart'

export function FaciliteSuaRotinaMobile() {
  return (
    <div>
      <p className="px-4 pt-4 font-normal text-color-gray">
        Facilite sua rotina
      </p>
      <div className="flex flex-col md:gap-1">
        <a
          href="/"
          className="group m-4 flex items-center pr-2 text-sm text-color-dark-gray"
        >
          <div className="group-hover:text-primary-color">
            <CreditCard />
          </div>
          <div className="ml-3">
            <p className="font-medium">Cartão Stone</p>
            <p className="mt-[2px] text-sm font-normal text-color-gray">
              Cartão internacional grátis pra compras e saques
            </p>
          </div>
        </a>
        <a
          href="/"
          className="group m-4 flex items-center pr-2 text-sm text-color-dark-gray"
        >
          <div className="group-hover:text-primary-color">
            <Dollar2 />
          </div>
          <div className="ml-3">
            <p className="font-medium">Link de Pagamento</p>
            <p className="mt-[2px] text-sm font-normal text-color-gray">
              Venda pela internet e nas redes sociais
            </p>
          </div>
        </a>
        <a
          href="/"
          className="group m-4 flex items-center pr-2 text-sm text-color-dark-gray"
        >
          <div className="group-hover:text-primary-color">
            <QRCode />
          </div>
          <div className="ml-3">
            <p className="font-medium">Pix</p>
            <p className="mt-[2px] text-sm font-normal text-color-gray">
              Conheça todas as formas de vender com QR Code
            </p>
          </div>
        </a>
        <a
          href="/"
          className="group m-4 flex items-center pr-2 text-sm text-color-dark-gray"
        >
          <div className="group-hover:text-primary-color">
            <Database />
          </div>
          <div className="ml-3">
            <p className="font-medium">Antecipação</p>
            <p className="mt-[2px] text-sm font-normal text-color-gray">
              Receba antecipadamente o dinheiro das suas vendas
            </p>
          </div>
        </a>
        <a
          href="/"
          className="group m-4 flex items-center pr-2 text-sm text-color-dark-gray"
        >
          <div className="group-hover:text-primary-color">
            <Chart />
          </div>
          <div className="ml-3">
            <p className="font-medium">Controle</p>
            <p className="mt-[2px] text-sm font-normal text-color-gray">
              Gerencie as suas vendas de onde estiver
            </p>
          </div>
        </a>
      </div>
    </div>
  )
}
