import React, { FC } from 'react'
import { NavLink, NavLinkProps } from 'react-bootstrap'

export const RNavLink: FC<NavLinkProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <NavLink {...props} className={`${className ? className : ''} r-nav-link`}>
      {children}
    </NavLink>
  )
}
