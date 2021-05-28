import React, { FC } from 'react'
import { Button, ButtonProps } from 'react-bootstrap'

import './RButton.scss'

export const RButton: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <Button
      className={`${
        className ? className : ''
      } r-button d-flex justify-content-center align-items-center fs-6`}
      {...props}
    >
      {children}
    </Button>
  )
}
