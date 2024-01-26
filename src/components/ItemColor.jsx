import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemColor = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Title>Card Title</Card.Title>
      <Card.Body>
       
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className='border red'></div>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>
    );
};

export default ItemColor;



