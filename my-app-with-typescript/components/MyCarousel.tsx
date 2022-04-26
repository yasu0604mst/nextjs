import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageCarousel from './ImageCarousel';

const MyCarousel = () => (
<Carousel className='my-2'>
  <Carousel.Item>
    <ImageCarousel
      className="d-block w-100"
      src="/images/top1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
        <h3 className='mb-0' style={{background:'#0002'}}>ページに映える写真を撮影</h3>
        <p style={{background:'#0002'}}>写真はSNSのアイコンなどに使用することを想定し、明るく映えるような写真を撮影します。</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <ImageCarousel
      className="d-block w-100"
      src="/images/top2.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
        <h3 className='mb-0' style={{background:'#0002'}}>自然な写真を撮影</h3>
        <p style={{background:'#0002'}}>友達に撮られたかのような自然な写真撮影を心がけています。</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <ImageCarousel
      className="d-block w-100"
      src="/images/top3.jpg"
      alt="Third slide" 
    />

    <Carousel.Caption >
        <h3 className='mb-0' style={{background:'#0002'}}>卒業式、卒園式、入学式の記念撮影にも</h3>
        <p style={{background:'#0002'}}>思い出の1日を写真にします</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
)
export default MyCarousel