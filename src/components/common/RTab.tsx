import React, { FC } from 'react'
import { Tab, TabProps } from 'react-bootstrap'

export const RTab: FC<TabProps> = ({ children, className, ...props }) => {
  return (
    <Tab className={`${className ? className : ''} r-tab`} {...props}>
      {children}
    </Tab>
  )
}
