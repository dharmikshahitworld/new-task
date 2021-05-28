import React, { FC } from 'react'
import { Col, ColProps } from 'react-bootstrap'

export const RCol: FC<ColProps> = ({ className, children, ...props }) => {
  return (
    <Col className={`${className ? className : ''} r-col`} {...props}>
      {children}
    </Col>
  )
}
