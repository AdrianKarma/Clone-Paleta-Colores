import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import FormularioColor from './components/FormularioColor'
import { Container } from 'react-bootstrap';

function App() {
  

  return (
    <>
    <Container className='mt-4'>
    <h1>colores</h1>
     <FormularioColor></FormularioColor>
     </Container>
    </>
  )
}

export default App
