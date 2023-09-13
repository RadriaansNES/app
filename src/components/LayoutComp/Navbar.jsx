import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../imgs/logo.jpg';
import Menu from '../Pages/Menu/Menu';
import WhatsNew from '../Pages/Menu/WhatsNew';
import cart from '../../imgs/cartf.png'
import { Link } from 'react-router-dom';

function MenuNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/checkout">
          <img src={cart} className='cart' alt='Cart for your order' />
        </Link>
        <img src={logo} alt='Logo' id='headerLogo' />
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
      </Container>
      <Container id='dropdown'>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/WhatsNew" element={WhatsNew}>DEALS</Nav.Link>
            <Nav.Link href="/Menu" element={Menu}>MENU</Nav.Link>
            <Nav.Link href="/Subs">SUBS</Nav.Link>
            <Nav.Link href="/Salads">SALADS</Nav.Link>
            <Nav.Link href="/Sides">SIDE ORDERS</Nav.Link>
            <Nav.Link href="/Beverages">BEVERAGES</Nav.Link>
            <Nav.Link href="/DeliveryMap">DELIVERY MAP</Nav.Link>
            <Nav.Link href="tel:7055666969">CALL 1955 LASALLE BLVD.</Nav.Link>
            <Nav.Link href="tel:7055222828">CALL 1769 REGENT ST. S.</Nav.Link>
            <Nav.Link href="tel:7055885858">CALL 3020 HWY. 69 N.</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}

export default MenuNavbar;