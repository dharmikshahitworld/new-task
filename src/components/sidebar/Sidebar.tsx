import { FC } from 'react'
import { RLink } from 'components/common/link/RLink'
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarContent,
  SidebarHeader,
} from 'react-pro-sidebar'
import { useLocation } from 'react-router-dom'
import { sidebarMenuItems } from 'utils/data'

import './Sidebar.scss'

export const Sidebar: FC = () => {
  let route = useLocation()
  let currentRoute = route.pathname
  return (
    <ProSidebar>
      <SidebarHeader className='text-center py-4'>
        Sidebar Heading
      </SidebarHeader>
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
    </ProSidebar>
  )
}
