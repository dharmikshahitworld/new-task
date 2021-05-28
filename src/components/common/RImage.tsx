import { FC } from 'react'
import { Image, ImageProps } from 'react-bootstrap'

export const RImage: FC<ImageProps> = ({ className, children, ...props }) => {
  return (
    <Image {...props} className={`${className ? className : 'r-image'}`}>
      {children}
    </Image>
  )
}
