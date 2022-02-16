import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import CardWidget from '../../Icon/CartWidget.js';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  // const activeStyle = {
  //  color: 'green'
  //   } 

  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand>
        <Link to="/">Gameshop</Link>
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link>
          {/* <NavLink to="/item" style={({isActive}) => (isActive ? activeStyle : undefined)}>item</NavLink> */}
            </Nav.Link>
          <NavDropdown title="Categorias" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <NavLink
                  className={({ isActive }) =>
                    isActive ? "activeClass" : undefined
                  }
                  to="category/Accion"
              >
                Accion 
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink
                  className={({ isActive }) =>
                    isActive ? "activeClass" : undefined
                  }
                  to="category/Aventura"
              >
                Aventura 
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink
                  className={({ isActive }) =>
                    isActive ? "activeClass" : undefined
                  }
                  to="category/Disparos"
              >
                Disparos 
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink
                  className={({ isActive }) =>
                    isActive ? "activeClass" : undefined
                  }
                  to="category/Carreras"
              >
                Carreras 
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item>
              <NavLink
                  className={({ isActive }) =>
                    isActive ? "activeClass" : undefined
                  }
                  to="category/Consolas"
              >
                Consolas 
              </NavLink>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <NavLink to="/cart">
       <CardWidget />
      </NavLink>
    </Container>
  </Navbar>
  )
  ;
};

export default NavBar;
