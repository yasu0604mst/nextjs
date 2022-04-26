import React from 'react';
import styles from '../styles/Common.module.scss'
import  '../styles/Common.module.scss'
type Props = {
  className?: string
  src?: string
  alt?: string
  width?:string
  height?:string
}
const ImageCarousel = ({className, src, alt, width, height}:Props) => {
  return (
    <img src={src} alt={alt} className={className} width={width} height={height} />
  )
}

export default ImageCarousel;