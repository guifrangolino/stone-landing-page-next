import { PageLogo } from './Icons/PageLogo'
import { Button } from './Button'
import { ProdutosDropdown } from './ProdutosDropdown'
import { SobreStoneDropdown } from './SobreStoneDropdown'
import { AtendimentoDropdown } from './AtendimentoDropdown'
import { BaixeOAppDropdown } from './BaixeOAppDropdown'

export function HeaderFullSize() {
  return (
    <div className="m-auto hidden h-full w-full max-w-7xl items-center lg:flex">
      {/* Logo */}
      <a href="/">
        <PageLogo />
      </a>

      {/* Nav da esquerda */}
      <nav className="ml-[24px] flex h-full items-center">
        <div className="group relative flex h-full cursor-default items-center px-4 text-color-dark-gray hover:rounded-t-2xl hover:shadow-menuItem hover:after:absolute hover:after:bottom-[-2px] hover:after:left-0 hover:after:mx-[1px] hover:after:h-3 hover:after:w-[calc(100%-2px)] hover:after:bg-white hover:after:content-['']">
          Produtos
          <ProdutosDropdown />
        </div>

        <div className="flex h-full items-center px-4 font-medium text-color-dark-gray">
          <a href="/" className="hover:text-green-500">
            Planos
          </a>
        </div>

        <div className="group relative flex h-full cursor-default items-center px-4 text-color-dark-gray hover:rounded-t-2xl hover:shadow-menuItem hover:after:absolute hover:after:bottom-[-2px] hover:after:left-0 hover:after:mx-[1px] hover:after:h-3 hover:after:w-[calc(100%-2px)] hover:after:bg-white hover:after:content-['']">
          Sobre a Stone
          <SobreStoneDropdown />
        </div>

        <div className="flex h-full items-center px-4 font-medium text-color-dark-gray">
          <a href="/" className="hover:text-green-500">
            Blog
          </a>
        </div>
      </nav>

      {/* Nav da direita */}
      <nav className=" ml-auto flex h-full items-center">
        <div className="group relative flex h-full cursor-default items-center px-4 text-color-dark-gray hover:rounded-t-2xl hover:shadow-menuItem hover:after:absolute hover:after:bottom-[-2px] hover:after:left-0 hover:after:mx-[1px] hover:after:h-3 hover:after:w-[calc(100%-2px)] hover:after:bg-white hover:after:content-['']">
          Atendimento
          <AtendimentoDropdown />
        </div>
        <div className="group relative flex h-full cursor-default items-center px-4 text-color-dark-gray hover:rounded-t-2xl hover:shadow-menuItem hover:after:absolute hover:after:bottom-[-2px] hover:after:left-0 hover:after:mx-[1px] hover:after:h-3 hover:after:w-[calc(100%-2px)] hover:after:bg-white hover:after:content-['']">
          Baixe o app
          <BaixeOAppDropdown />
        </div>
        <Button className="ml-4" href="/">
          Login
        </Button>
        <Button className="ml-4" href="/" secondary>
          Seja Stone
        </Button>
      </nav>
    </div>
  )
}
