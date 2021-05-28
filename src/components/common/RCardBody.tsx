import React, { FC } from 'react'
import { Card, CardProps } from 'react-bootstrap'

export const RCardBody: FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <Card.Body
      className={`${className ? className : ''} r-card-body`}
      {...props}
    >
      {children}
    </Card.Body>
  )
}
