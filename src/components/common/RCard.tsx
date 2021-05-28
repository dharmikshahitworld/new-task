import React, { FC } from 'react'
import { Card, CardProps } from 'react-bootstrap'

export const RCard: FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <Card
      className={`${className ? className : ''} r-card border-0 r-shadow'`}
      {...props}
    >
      {children}
    </Card>
  )
}
