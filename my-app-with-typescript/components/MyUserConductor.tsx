import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import MyCardImage from './MyCardImage'
type Props = {
  title?: string
  url?: string
  src?: string
  description?: string
}
const MyUserConductor = ({ title, url,src, description }: Props) => (
  <div className='d-flex justify-content-center'>
  <MyCardImage title={title} url={src} description={description}></MyCardImage>
  </div>
)
export default MyUserConductor