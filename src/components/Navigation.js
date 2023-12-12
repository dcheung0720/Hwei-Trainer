import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Navigation = () =>{
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container style = {{display: "flex", justifyContent: "center"}}>
                <Navbar.Brand href="#home" style = {{fontFamily: 'Arial, sans-serif'}}><b>Hwei Trainer </b></Navbar.Brand>
            </Container>
        </Navbar>
    )
};

export default Navigation;