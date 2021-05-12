import React, { FC } from 'react'
import { Container, ContainerProps } from 'react-bootstrap'

export const RContainer: FC<ContainerProps> = ({ children, ...props }) => {
  return (
    <Container {...props} className='r-container'>
      {children}
    </Container>
  )
}
