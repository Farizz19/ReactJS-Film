import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link } from 'react-router-dom';
import Logo from '.././assets/images/bg/logo.png';

function Navigasi() {
    return (
        <Navbar id='nav' className='navbar shadow' fixed='top' expand="lg">
            <Container>
                <Navbar.Brand href="#home" className="text-light">
                    <img id='bios' src={Logo} />RPL-FILM21
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <a id='n' className="text-light nav-link rounded" href='/'>Home</a>
                        <a id='n' className="text-light nav-link rounded" href='#trending'>Trending</a>
                        <a id='n' className="text-light nav-link rounded" href='#superhero'>Superhero</a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigasi;