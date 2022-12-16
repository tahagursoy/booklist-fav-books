import React from 'react'
import {Nav, Navbar, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {useApiContext} from './contextapi'



const NavigationBar = () => {

  const {favs} = useApiContext()
  return (
    <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand as={Link} to="/">LOGO</Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/booklist/">Book List</Nav.Link>
        <Nav.Link as={Link} to="/favourites/">Favourites {favs.length}</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
      );
    }
    

export default NavigationBar;