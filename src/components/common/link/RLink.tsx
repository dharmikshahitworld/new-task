import React, { FC } from 'react'
import { Link, NavLinkProps } from 'react-router-dom'

import './RLink.scss'

interface RLinkProps extends NavLinkProps {
  underline?: boolean
}

export const RLink: FC<RLinkProps> = ({
  children,
  className,
  underline,
  ...props
}) => {
  return (
    <Link
      {...props}
      className={`${className || ''} r-link ${underline && 'underline'}`}
    >
      {children}
    </Link>
  )
}
