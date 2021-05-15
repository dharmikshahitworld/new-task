import {
  FaComments,
  FaMobileAlt,
  FaPortrait,
  FaQuestionCircle,
  FaUserFriends,
} from 'react-icons/fa'
import { RiPlaneFill } from 'react-icons/ri'
import { MdCancel } from 'react-icons/md'

import { routePath, menuItems } from 'utils/enums'

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

export const sidebarMenuItems = [
  // {
  //   key: 1,
  //   icon: <RiPlaneFill />,
  //   path: toDashboard,
  //   name: dashboard,
  //   routesArray: [toDashboard],
  //   selected: true,
  //   subMenu: [],
  // },
]
