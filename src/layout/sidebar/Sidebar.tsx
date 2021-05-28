import { FC, useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { useLocation } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { BiMenu } from 'react-icons/bi'
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarContent,
  SidebarHeader,
} from 'react-pro-sidebar'

import { RLink } from 'components/common/link/RLink'

import { sidebarMenuItems } from 'utils/data'

import 'react-perfect-scrollbar/dist/css/styles.css'
import './Sidebar.scss'
import { FaUnity } from 'react-icons/fa'

export const Sidebar: FC = () => {
  let route = useLocation()
  let currentRoute = route.pathname

  const [collapse, setCollapse] = useState(false)

  return (
    <div className='sidebar'>
      <ProSidebar
        className='bg-primary text-light'
        collapsed={collapse}
        toggled
      >
        <Button
          onClick={() => setCollapse(!collapse)}
          className='bg-transparent text-muted border-0 shadow-none fs-4 toggle'
        >
          <BiMenu className='d-flex align-items-center' />
        </Button>
        <SidebarHeader
          className={`text-center fw-bold d-flex align-items-center fs-4 mx-3 ${
            collapse ? 'collapsed-header' : ''
          }`}
        >
          <FaUnity className={!collapse ? 'me-2' : ''} />
          {!collapse && 'Lector.'}
        </SidebarHeader>
        <PerfectScrollbar>
          <SidebarContent>
            <Menu>
              {sidebarMenuItems.map((sidebar) => {
                const activePath = sidebar?.routesArray?.includes(currentRoute)
                return (
                  <MenuItem
                    icon={sidebar?.icon}
                    key={sidebar?.key}
                    className={`${activePath ? 'active-item' : ''}`}
                  >
                    {sidebar.name}
                    <RLink to={sidebar?.path} />
                  </MenuItem>
                )
              })}
            </Menu>
          </SidebarContent>
        </PerfectScrollbar>
      </ProSidebar>
    </div>
  )
}
