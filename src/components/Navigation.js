import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Navigation = () =>{
    const reload = () =>{
        window.location.reload();
    }
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container style = {{display: "flex", justifyContent: "center"}}>
                <Navbar.Brand href="#home" onClick={reload} style = {{fontFamily: 'Arial, sans-serif', fontSize: "40px"}}><b>Hwei Trainer </b></Navbar.Brand>
            </Container>
        </Navbar>
    )
};

export default Navigation;