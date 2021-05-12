import React, { FC } from 'react'
import { Row, RowProps } from 'react-bootstrap'

export const RRow: FC<RowProps> = ({ children, ...props }) => {
  return (
    <Row {...props} className='r-row'>
      {children}
    </Row>
  )
}
