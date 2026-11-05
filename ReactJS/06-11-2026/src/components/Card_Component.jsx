import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import card_img from '../assets/hero.png'

function Card_Component() {
  return (
    <Card style={{ width: '18rem' }} className='mb-5'>
      <Card.Img variant="top" src={card_img} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Card_Component;