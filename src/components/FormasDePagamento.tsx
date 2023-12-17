import { FormasDePagamentoBandeirasCreditoDebitoOutros } from './FormasDePagamentoBandeirasCreditoDebitoOutros'
import { FormasDePagamentoBandeirasVouchers } from './FormasDePagamentoBandeirasVouchers'

export function FormasDePagamento() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center px-4 py-10 md:max-w-[1195px] md:px-6">
        <h2 className="text-center font-sharon-display text-2xl font-bold leading-8 text-color-dark-gray md:text-xl lg:text-2xl lg:leading-8">
          Aceite as principais formas de pagamento e{' '}
          <span className="font-sharon-display text-primary-color">
            mais de 50 bandeiras
          </span>
        </h2>
        <div className="mt-6 flex w-[310px] gap-2 sm:w-[630px] md:w-[734px] lg:w-full">
          <div className="mx-auto mb-4 w-auto">
            <div className="mt-[8px] flex flex-col items-center whitespace-nowrap rounded-[1px] border border-b-0 border-background2-color">
              <p className="mt-[-10px] bg-white px-1 font-sharon-display text-sm font-medium text-color-dark-gray">
                Crédito, débito e outros
              </p>
            </div>
            <FormasDePagamentoBandeirasCreditoDebitoOutros />
          </div>
        </div>
        <div className="flex w-[310px] gap-2 sm:w-[630px] md:w-[734px] lg:w-full">
          <div className="mx-auto mb-4 w-auto">
            <div className="mt-[8px] flex flex-col items-center whitespace-nowrap rounded-[1px] border border-b-0 border-background2-color">
              <p className="mt-[-10px] bg-white px-1 font-sharon-display text-sm font-medium text-color-dark-gray">
                Vouchers
              </p>
            </div>
            <FormasDePagamentoBandeirasVouchers />
          </div>
        </div>
      </div>
    </div>
  )
}
