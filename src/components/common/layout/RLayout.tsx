import React, { FC } from 'react'
import { useLocation } from 'react-router-dom'
import {
  SidebarContent,
  ProSidebar,
  SidebarHeader,
  Menu,
  MenuItem,
} from 'react-pro-sidebar'

import { RRow } from '../RRow'
import { RCol } from '../RCol'
import { Sidebar } from 'components/sidebar/Sidebar'

import { sidebarMenuItems } from 'utils/data'

import './RLayout.scss'

export const RLayout: FC<{}> = ({ children }) => {
  return (
    <div className='r-layout'>
      <div className='r-layout-content'>
        <div className='main-header'>Header</div>
        <RRow className='g-0'>
          <RCol xl={3}>
            <Sidebar />
          </RCol>
          <RCol xl={21}>{children}</RCol>
        </RRow>
      </div>
      <div className='main-footer'>footer</div>
    </div>
  )
}
