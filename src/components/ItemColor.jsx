import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemColor = (props) => {
    return (
        <div className='d-flex flex-wrap justify-content-start'>
            {props.colores.map((elementoColor, posicionColor)=>
            <Card className=''  key={posicionColor} style={{ width: '18rem' }}>
            <Card.Title className='text-center mt-2'>{elementoColor}</Card.Title>
           
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
            <div className="" style={{ backgroundColor: elementoColor, width: '100px', height: '100px', margin: '10px 0' }}></div>
       
     
        <Button className="ml-auto" variant="danger">Go somewhere</Button>
      </Card.Body>
    </Card>
    )}
        </div>
    );
};

export default ItemColor;



