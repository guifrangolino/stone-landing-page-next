import { SupermarketCart } from './Icons/SupermarketCart'
import { Equal } from './Icons/Equal'

export function MaisSolucoesMobile() {
  return (
    <div>
      <p className="px-4 pt-4 font-normal text-color-gray">Mais soluções</p>
      <div>
        <a
          href="/"
          className="group m-4 flex items-center pr-2 text-sm text-color-dark-gray"
        >
          <div className="group-hover:text-primary-color">
            <SupermarketCart />
          </div>
          <div className="ml-3">
            <p className="font-medium">E-commerce</p>
            <p className="mt-[2px] text-sm font-normal text-color-gray">
              Pagar.me, pra você que já tem uma loja virtual
            </p>
          </div>
        </a>
        <a
          href="/"
          className="group m-4 flex items-center pr-2 text-sm text-color-dark-gray"
        >
          <div className="group-hover:text-primary-color">
            <Equal />
          </div>
          <div className="ml-3">
            <p className="font-medium">Raio X</p>
            <p className="mt-[2px] text-sm font-normal text-color-gray">
              Acompanhe todas suas maquininhas e taxas em um só lugar
            </p>
          </div>
        </a>
      </div>
    </div>
  )
}
