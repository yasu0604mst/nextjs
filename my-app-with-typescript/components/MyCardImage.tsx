import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
type Props = {
  title?: string
  url?: string
  description?: string
}
const MyCardImage = ({ title, url, description }: Props) => (
<Card className="bg-dark text-white d-flex justify-content-center">
  <Card.Img src={url} alt={title} />
  <Card.ImgOverlay>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
    {description}
    </Card.Text>
  </Card.ImgOverlay>
</Card>
)
export default MyCardImage


