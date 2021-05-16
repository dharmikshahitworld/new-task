import { FC } from 'react'
import { Sidebar } from 'components/sidebar/Sidebar'

import './RLayout.scss'

export const RLayout: FC<{}> = ({ children }) => {
  return (
    <div className='r-layout'>
      <div className='r-layout-content'>
        <div className='d-flex'>
          <Sidebar />
          <div>
            <div className='main-header'>Header</div>
            {children}
          </div>
        </div>
      </div>
      <div className='main-footer'>footer</div>
    </div>
  )
}
