import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintbrush } from '@fortawesome/free-solid-svg-icons';


const Navigation = () =>{
    const reload = () =>{
        window.location.reload();
    }
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container style = {{display: "flex", justifyContent: "center"}}>
                <Navbar.Brand href="#home" onClick={reload} style = {{fontFamily: 'Arial, sans-serif', fontSize: "40px"}}><b>Hwei Trainer <FontAwesomeIcon icon={faPaintbrush} /> </b></Navbar.Brand>
            </Container>
        </Navbar>
    )
};

export default Navigation;