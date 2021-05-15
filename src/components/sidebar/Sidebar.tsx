import { RNavLink } from 'components/common/RNavLink'
import React, { FC } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import { routePath } from 'utils/enums'
import { menuItems } from 'utils/enums'

export const Sidebar: FC = () => {
  const { toDashboard } = routePath
  const {
    dashboard,
    widgets,
    UIElements,
    advanceUI,
    formElements,
    editors,
    charts,
    tables,
    popups,
    notification,
    icons,
    maps,
    userPages,
    errorPages,
    generalPages,
    ECommerce,
    Email,
    calendar,
    todoList,
    gallery,
    documentation,
  } = menuItems
  return (
    <Navbar bg='primary' variant='dark'>
      <Nav className='flex-column'>
        <NavLink to={dashboard} exact component={RNavLink}>
          Dashboard
        </NavLink>
        <NavLink to='/' component={RNavLink}>
          Widgets
        </NavLink>
      </Nav>
    </Navbar>
  )
}
