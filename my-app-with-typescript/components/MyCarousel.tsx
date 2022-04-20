import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

const MyCarousel = () => (
<Carousel>
  <Carousel.Item>
    <Image
      className="d-block w-100"
      src="/images/001.jpg"
      alt="First slide"
      width={1000} height={500}
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image
      className="d-block w-100"
      src="/images/002.jpg"
      alt="Second slide"
      width={1000} height={500}
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image
      className="d-block w-100"
      src="/images/003.jpg"
      alt="Third slide" 
      width={1000} height={500}
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
)
export default MyCarousel