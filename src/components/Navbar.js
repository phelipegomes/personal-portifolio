import "./Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="#inicio">Início</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#sobre-mim">Sobre mim</Nav.Link>
                        <Nav.Link href="#projetos">Projetos</Nav.Link>
                        <Nav.Link href="#curriculo">Currículo</Nav.Link>
                        <Nav.Link href="#contato">Contato</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>    
    );
};