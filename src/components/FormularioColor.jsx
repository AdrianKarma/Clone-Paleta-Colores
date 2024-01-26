import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import ItemColor from "./ItemColor";

const FormularioColor = () => {
const [color, setColor]= useState('');
const [colores, setColores]= useState[];

    return (
        <section>

<Form >
        <Form.Group
          className="mb-3 d-flex"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label className="">Ingresa tus Tareas:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Tarea1"
            minLength={3}
            maxLength={50}
            onChange={(e)=> setColor (e.target.value)}
           
          />
          <Button className="mx-3" type="submit" variant="success">
            Enviar
          </Button>
        </Form.Group>
      </Form>
    <ItemColor></ItemColor>

        </section>
    );
};

export default FormularioColor;