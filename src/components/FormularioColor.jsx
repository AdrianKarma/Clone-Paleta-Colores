import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import ItemColor from "./ItemColor";

const FormularioColor = () => {
const [color, setColor]= useState('');
const [colores, setColores]= useState([]);

const borrarColor = (nombreColor)=>{
    const coloresFiltrados =colores.filter((color)=> color!== nombreColor);
    setColores(coloresFiltrados);
}
const handleSubmit = (e)=> {
    e.preventDefault()
    setColores([...colores, color])
    setColor('')
}

    return (
        <section>

<Form  onSubmit={handleSubmit}>
        <Form.Group
          className="mb-3 d-flex"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label className="">Ingresa un color:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Blue "
            minLength={3}
            maxLength={10}
            onChange={(e)=> setColor (e.target.value)}
            value={color}
           
          />
          <Button className="mx-3" type="submit" variant="success">
            Agregar
          </Button>
        </Form.Group>
      </Form>
    <ItemColor colores={colores} borrarColor={borrarColor}></ItemColor>

        </section>
    );
};

export default FormularioColor;