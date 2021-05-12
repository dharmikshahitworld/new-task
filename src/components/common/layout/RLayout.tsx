import React, { FC } from 'react'
import { RCol } from '../RCol'
import { RContainer } from '../RContainer'

export const RLayout: FC<{}> = ({ children }) => {
  return (
    <div className='r-layout'>
      <div className='content'>
        <div className='main-header border'>Header</div>
        <RContainer fluid className='border border-primary'>
          <RCol xl={2} className='border'>
            Sidebar
          </RCol>
          <RCol xl={12} className='border'>
            {children}
          </RCol>
        </RContainer>
      </div>
      <div className='main-footer border'>footer</div>
    </div>
  )
}
