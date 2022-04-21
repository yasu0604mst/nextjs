import React from 'react';
import { Image as BootstrapImage } from 'react-bootstrap';
type Props = {
  src?: string
  alt?: string
  width?:string
  height?:string
}
const Image = ({src, alt, width, height}:Props) => {
  return (
    <BootstrapImage src={src} alt={alt} width={width} height={height} className="center-block img-fluid my-3 rounded-circle" />
  )
}

export default Image;