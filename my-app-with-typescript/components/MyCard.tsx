import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
type Props = {
  title?: string
  url?: string
  description?: string
}
const MyCard = ({ title, url, description }: Props) => (
<Card className='w-100 my-2' style={{ width: '18rem' }}>
  <Card.Img variant="top" src={url} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      {description}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
)
export default MyCard