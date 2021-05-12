import React, { FC } from 'react'
import { Col, ColProps } from 'react-bootstrap'

export const RCol: FC<ColProps> = ({ children, ...props }) => {
  return (
    <Col className='r-col' {...props}>
      {children}
    </Col>
  )
}
