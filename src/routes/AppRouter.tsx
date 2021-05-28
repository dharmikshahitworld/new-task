import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import { DashboardPage } from 'pages/dashboard/DashboardPage'
import { WidgetsPage } from 'pages/widgets/WidgetsPage'

import { routePath } from 'utils/enums'

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
    <Router>
      <Switch>
        <Route path={toDashboard} component={DashboardPage} exact />
        <Route path={toWidgets} component={WidgetsPage} exact />
        <Route path={toUIElements} component={DashboardPage} exact />
        <Route path={toAdvanceUI} component={DashboardPage} exact />
        <Route path={toFormElements} component={DashboardPage} exact />
        <Route path={toEditors} component={DashboardPage} exact />
        <Route path={toCharts} component={DashboardPage} exact />
        <Route path={toTables} component={DashboardPage} exact />
        <Route path={toPopups} component={DashboardPage} exact />
        <Route path={toNotification} component={DashboardPage} exact />
        <Route path={toIcons} component={DashboardPage} exact />
        <Route path={toMaps} component={DashboardPage} exact />
        <Route path={toUserPages} component={DashboardPage} exact />
        <Route path={toErrorPages} component={DashboardPage} exact />
        <Route path={toGeneralPages} component={DashboardPage} exact />
        <Route path={toECommerce} component={DashboardPage} exact />
        <Route path={toEMail} component={DashboardPage} exact />
        <Route path={toCalendar} component={DashboardPage} exact />
        <Route path={toTodoList} component={DashboardPage} exact />
        <Route path={toGallery} component={DashboardPage} exact />
        <Route path={toDocumentation} component={DashboardPage} exact />
      </Switch>
    </Router>
  )
}
