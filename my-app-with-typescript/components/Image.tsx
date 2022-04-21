import React from 'react';
type Props = {
  className?: string
  src?: string
  alt?: string
  width?:string
  height?:string
}
const Image = ({className, src, alt, width, height}:Props) => {
  return (
    <img src={src} alt={alt} width={width} height={height} className="{className} center-block img-fluid my-3 rounded-circle" />
  )
}

export default Image;