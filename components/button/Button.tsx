import type { ButtonHTMLAttributes } from 'react'
import cn from 'classnames'
import type { ReactComponent } from '../types'

const kindClass = (kind: ButtonKind, outlined?: boolean, link?: boolean) => {
  const name = link ? 'link' : kind
  return `btn-${outlined ? 'outline' : ''}${name}`
}

export type ButtonKind =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'link'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  kind?: ButtonKind
  outlined?: boolean
  size?: 'sm' | 'lg'
  href?: string
}

const Button: ReactComponent<ButtonProps> = ({
  children,
  className,
  outlined,
  size,
  href,
  kind = 'primary',
  ...props
}) => {
  const isLink = !!href
  const Tag = isLink ? 'a' : 'button'
  const classNames = cn(
    'btn',
    kindClass(kind, outlined, isLink),
    size ? `btn-${size}` : null,
    className
  )

  if (props.disabled) {
    props['aria-disabled'] = true
    props.tabIndex = -1
    if (isLink) classNames.concat(' disabled')
  }

  if (isLink) {
    props.role = 'button'
  }

  return (
    <Tag className={classNames} {...props} href={href}>
      {children}
    </Tag>
  )
}

export default Button
