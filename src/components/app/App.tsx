import React, { FC } from 'react'
import { AppRouter } from 'routes/AppRouter'

export const App: FC = () => {
  return (
    <div className='app'>
      <AppRouter />
    </div>
  )
}

export default App
