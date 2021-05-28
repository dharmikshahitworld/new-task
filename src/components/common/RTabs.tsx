import React, { FC } from 'react'
import { Tabs, TabsProps } from 'react-bootstrap'

export const RTabs: FC<TabsProps> = ({ children, className, ...props }) => {
  return (
    <Tabs className={`${className ? className : ''} r-tabs`} {...props}>
      {children}
    </Tabs>
  )
}
