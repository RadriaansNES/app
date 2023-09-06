import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../imgs/logo.jpg';

function MenuNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <div class='hide'/>
        <img src={logo} alt='Logo' id='headerLogo' />
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler"/>
      </Container>
      <Container id='dropdown'>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">WHAT'S NEW</Nav.Link>
            <Nav.Link href="#link">SPECIALTIES</Nav.Link>
            <Nav.Link href="#home">CREATE YOUR OWN</Nav.Link>
            <Nav.Link href="#link">TOPPINGS</Nav.Link>
            <Nav.Link href="#home">SIDE ORDERS</Nav.Link>
            <Nav.Link href="#link">BEVERAGES</Nav.Link>
            <Nav.Link href="#home">DELIVERY MAP</Nav.Link>
            <Nav.Link href="#link">CALL 1955 LASALLE BLVD.</Nav.Link>
            <Nav.Link href="#home">CALL 1769 REGENT ST. S.</Nav.Link>
            <Nav.Link href="#link">CALL 3020 HWY. 69 N.</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}

export default MenuNavbar;