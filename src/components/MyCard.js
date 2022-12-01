import {Card, Button} from 'react-bootstrap';

function MyCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.purina.es/sites/default/files/2021-02/BREED%20Hero_0034_chihuahua_smooth.jpg" />
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

export default MyCard;