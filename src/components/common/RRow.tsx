import React, { FC } from 'react'
import { Row, RowProps } from 'react-bootstrap'

export const RRow: FC<RowProps> = ({ className, children, ...props }) => {
  return (
    <Row {...props} className={`${className ? className : ''} r-row`}>
      {children}
    </Row>
  )
}
