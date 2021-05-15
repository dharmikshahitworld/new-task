import React from 'react'
import Switch from 'react-bootstrap/esm/Switch'
import { Route, Router } from 'react-router'

import { DashboardPage } from 'pages/dashboard/Dashboard'
import { WidgetsPage } from 'pages/widgets/Widgets'

import { routePath } from 'utils/enums'
import history from './history'

export const AppRouter = () => {
  const {
    toDashboard,
    toWidgets,
    toUIElements,
    toAdvanceUI,
    toFormElements,
    toEditors,
    toCharts,
    toTables,
    toPopups,
    toNotification,
    toIcons,
    toMaps,
    toUserPages,
    toErrorPages,
    toGeneralPages,
    toECommerce,
    toEMail,
    toCalendar,
    toTodoList,
    toGallery,
    toDocumentation,
  } = routePath

  return (
    <Router history={history}>
      <Switch>
        <Route path={toDashboard} exact component={DashboardPage} />
        <Route path={toWidgets} exact component={WidgetsPage} />
      </Switch>
    </Router>
  )
}
