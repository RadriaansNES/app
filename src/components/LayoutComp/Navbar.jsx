import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../imgs/logo.jpg';
import cart from '../../imgs/cartf.png'
import { Link } from 'react-router-dom';

function MenuNavbar() {
  return (
    <div className='TopMenu'>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Link to="/checkout">
            <img src={cart} className='cart' alt='Cart for your order' />
          </Link>
          <Link to='/WhatsNew'>
            <img src={logo} alt='Logo' id='headerLogo' />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
        </Container>
        <Container id='dropdown'>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/WhatsNew">DEALS</Nav.Link>
              <Nav.Link href="/Menu">MENU</Nav.Link>
              <Nav.Link href="/Subs">SUBS</Nav.Link>
              <Nav.Link href="/Salads">SALADS</Nav.Link>
              <Nav.Link href="/Sides">SIDE ORDERS</Nav.Link>
              <Nav.Link href="/Beverages">BEVERAGES</Nav.Link>
              <Nav.Link href="/Account">ACCOUNT</Nav.Link>
              {/* <Nav.Link href="/DeliveryMap">DELIVERY MAP</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar >
      <Container id='hide'>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" id='NavF'>
            <Nav.Link href="/WhatsNew">DEALS</Nav.Link>
            <Nav.Link href="/Menu">MENU</Nav.Link>
            <Nav.Link href="/Subs">SUBS</Nav.Link>
            <Nav.Link href="/Salads">SALADS</Nav.Link>
            <Nav.Link href="/Sides">SIDE ORDERS</Nav.Link>
            <Nav.Link href="/Beverages">BEVERAGES</Nav.Link>
            <Nav.Link href="/Account">ACCOUNT</Nav.Link>
            <Nav.Link href="/checkout">CART</Nav.Link>
            {/* <Nav.Link href="/DeliveryMap">DELIVERY MAP</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </div>
  );
}

export default MenuNavbar;