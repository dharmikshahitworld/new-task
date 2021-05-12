import { RContainer } from 'components/common/RContainer'
import React, { FC } from 'react'
import { Container } from 'react-bootstrap'

export const App: FC = () => {
  return (
    <div className='app'>
      <RContainer>
        <div className='border border-dark'>hello World</div>
      </RContainer>
      <Container>
        <div className='border border-dark'>hello World</div>
      </Container>
    </div>
  )
}

export default App
