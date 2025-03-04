import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../assets/img/man-3262834_960_720.webp";
import "./Header.scss";

function Header() {
  return (
    <Navbar expand="lg" className="header-navbar">
      <Container>
        <Navbar.Brand href="/" className="brand">
          <img src={logo} alt="Logo" className="logo" />
          <span className="brand-name">Mexican Food</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/" className="nav-link">Accueil</Nav.Link>
            <Nav.Link href="/menu" className="nav-link">Menu</Nav.Link>
            <Nav.Link href="/contact" className="nav-link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
