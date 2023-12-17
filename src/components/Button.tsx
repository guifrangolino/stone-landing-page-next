import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'

interface ButtonProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  secondary?: boolean
  large?: boolean
}

export function Button(props: ButtonProps) {
  const { secondary, large, className, ...rest } = props

  return (
    <a
      className={`${
        secondary && 'bg-primary-color text-white'
      } border-btn-border-color hover:border-btn-hover-background-color ${
        secondary
          ? 'hover:bg-btn-secondary-hover-background-color'
          : 'hover:bg-btn-hover-background-color'
      } inline-flex ${
        large ? 'h-14' : 'h-12'
      } items-center rounded-[32px] hover:shadow-btn ${
        secondary ? null : 'border'
      } ${large ? 'px-6' : 'px-4'} ${
        className ?? null
      } justify-center leading-none`}
      {...rest}
    >
      {props.children}
    </a>
  )
}
