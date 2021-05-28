import { FC } from 'react'

import { Sidebar } from 'layout/sidebar/Sidebar'
import { Header } from './header/Header'

import './RLayout.scss'

export const RLayout: FC<{}> = ({ children }) => {
  return (
    <div className='r-layout'>
      <div className='r-layout-content'>
        <div className='d-flex'>
          <Sidebar />
          <div className='bg-light w-100'>
            <Header />
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
