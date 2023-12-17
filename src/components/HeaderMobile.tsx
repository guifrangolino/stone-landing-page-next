'use client'

import { CardMachine2 } from './Icons/CardMachine2'
import { Dollar3 } from './Icons/Dollar3'
import { StoneLogo } from './Icons/StoneLogo'
import { SpeechBubble } from './Icons/SpeechBubble'
import { QuestionCircle } from './Icons/QuestionCircle'
import { ProdutosDropdownMobile } from './ProdutosDropdownMobile'
import { DropdownMenuMobileOption } from './DropdownMenuMobileOption'
import { SobreStoneDropdownMobile } from './SobreStoneDropdownMobile'
import { AtendimentoDropdownMobile } from './AtendimentoDropdownMobile'
import { PageLogo } from './Icons/PageLogo'
import { Fade as Hamburger } from 'hamburger-react'
import { UserDialog } from './Icons/UserDialog'
import { Button } from './Button'
import { useState } from 'react'
import { SuporteParaClienteMobile } from './SuporteParaClienteMobile'
import { ConhecaNossosPlanosMobile } from './ConhecaNossosPlanosMobile'

export function HeaderMobile() {
  const [isSuporteParaClienteOpen, setSuporteParaClienteOpen] = useState(false)
  const [isMenuMobileOpen, setMenuMobileOpen] = useState(false)
  const [show, setShow] = useState({
    collapse1: false,
    collapse2: false,
    collapse3: false,
  })

  const toggleShow = (value: object) => {
    setShow({ ...show, ...value })
  }

  function handleSuporteClick() {
    if (isMenuMobileOpen) handleMenuClick()
    setSuporteParaClienteOpen((prev) => !prev)
  }

  function handleMenuClick() {
    if (isSuporteParaClienteOpen) handleSuporteClick()
    setMenuMobileOpen((prev) => !prev)
    !isMenuMobileOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto')
  }

  return (
    <div className="m-auto flex h-full w-full max-w-7xl items-center lg:hidden">
      {/* Logo */}
      <a href="/">
        <PageLogo />
      </a>
      {/* Nav Right */}
      <nav className="ml-auto flex">
        <div className="w-[124px]">
          <Button href="/" secondary>
            Seja Stone
          </Button>
        </div>
        <div className="-mr-2 flex items-center gap-2">
          <button
            title="Suporte para o cliente"
            className={`flex h-12 w-12 items-center justify-center ${
              isSuporteParaClienteOpen
                ? 'rounded-full bg-background4-color text-color-dark-gray'
                : 'text-primary-color'
            }`}
            onClick={() => handleSuporteClick()}
          >
            <UserDialog />
          </button>
          <button
            title="Menu Mobile"
            className={`${
              isMenuMobileOpen ? 'rounded-full bg-background4-color' : null
            }`}
          >
            <Hamburger
              color={`${
                isMenuMobileOpen
                  ? 'var(--color-dark-gray)'
                  : 'var(--primary-color)'
              }`}
              size={18}
              toggled={isMenuMobileOpen}
              toggle={handleMenuClick}
            />
          </button>
        </div>
      </nav>
      {/* Suporte para o cliente */}
      <SuporteParaClienteMobile isOpen={isSuporteParaClienteOpen} />
      {/* Menu Mobile */}
      <div
        className={`absolute right-0 top-[64px] ${
          isMenuMobileOpen ? 'visible opacity-100' : 'invisible opacity-0'
        } h-[calc(100svh-64px)] w-full flex-col overflow-x-hidden bg-menu-mobile-background transition-all duration-700`}
      >
        <div
          className={`ml-auto flex h-full w-full max-w-[500px] flex-col overflow-x-auto bg-white ${
            isMenuMobileOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-all duration-700`}
        >
          <div>
            {/* PRODUTOS */}
            <div>
              <DropdownMenuMobileOption.Root
                isDropdown
                show={show.collapse1}
                toggleShow={() =>
                  toggleShow({ ...show, collapse1: !show.collapse1 })
                }
              >
                <DropdownMenuMobileOption.Icon icon={<CardMachine2 />} />
                <DropdownMenuMobileOption.Content>
                  <DropdownMenuMobileOption.Title text="Produtos" />
                  <DropdownMenuMobileOption.Desc text="Soluções de venda pro seu negócio" />
                </DropdownMenuMobileOption.Content>
              </DropdownMenuMobileOption.Root>
              {/* Dropdown */}
              <ProdutosDropdownMobile show={show.collapse1} />
            </div>

            {/* PLANOS */}
            <DropdownMenuMobileOption.Root href="/">
              <DropdownMenuMobileOption.Icon icon={<Dollar3 />} />
              <DropdownMenuMobileOption.Content>
                <DropdownMenuMobileOption.Title text="Planos" />
                <DropdownMenuMobileOption.Desc text="Planos pensados pro seu tipo de negócio" />
              </DropdownMenuMobileOption.Content>
            </DropdownMenuMobileOption.Root>

            {/* SOBRE A STONE */}
            <div>
              <DropdownMenuMobileOption.Root
                isDropdown
                show={show.collapse2}
                toggleShow={() =>
                  toggleShow({ ...show, collapse2: !show.collapse2 })
                }
              >
                <DropdownMenuMobileOption.Icon icon={<StoneLogo />} />
                <DropdownMenuMobileOption.Content>
                  <DropdownMenuMobileOption.Title text="Sobre a Stone" />
                  <DropdownMenuMobileOption.Desc text="Conheça mais sobre nossa empresa" />
                </DropdownMenuMobileOption.Content>
              </DropdownMenuMobileOption.Root>

              <SobreStoneDropdownMobile show={show.collapse2} />
            </div>

            {/* BLOG */}
            <DropdownMenuMobileOption.Root href="/">
              <DropdownMenuMobileOption.Icon icon={<SpeechBubble />} />
              <DropdownMenuMobileOption.Content>
                <DropdownMenuMobileOption.Title text="Blog" />
                <DropdownMenuMobileOption.Desc text="Artigos e vídeos para o empreendedor" />
              </DropdownMenuMobileOption.Content>
            </DropdownMenuMobileOption.Root>

            {/* ATENDIMENTO */}
            <div>
              <DropdownMenuMobileOption.Root
                isDropdown
                show={show.collapse3}
                toggleShow={() =>
                  toggleShow({ ...show, collapse3: !show.collapse3 })
                }
              >
                <DropdownMenuMobileOption.Icon icon={<QuestionCircle />} />
                <DropdownMenuMobileOption.Content>
                  <DropdownMenuMobileOption.Title text="Atendimento" />
                  <DropdownMenuMobileOption.Desc text="Estamos aqui pra te ajudar" />
                </DropdownMenuMobileOption.Content>
              </DropdownMenuMobileOption.Root>

              <AtendimentoDropdownMobile show={show.collapse3} />
            </div>

            <ConhecaNossosPlanosMobile />
          </div>
          <div className="flex flex-col items-center justify-center gap-4 bg-background4-color p-4 pb-[100px] md:flex-row">
            <Button secondary href="/" className="w-full">
              Seja Stone
            </Button>
            <Button href="/" className="w-full">
              Baixe o App
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
