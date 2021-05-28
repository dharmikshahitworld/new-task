import { FC } from 'react'
import { Alert, AlertProps } from 'react-bootstrap'

export const RAlert: FC<AlertProps> = ({ children, className, ...props }) => {
  return (
    <Alert className={`${className ? className : ''} r-alert m-0`} {...props}>
      {children}
    </Alert>
  )
}
