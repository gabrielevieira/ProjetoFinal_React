import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css";

function Header() {
  return (
    <header>
      <Navbar class="navbar" variant="light">
        <Navbar.Brand href="/">
          <img src="logo.png" alt="logo" />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/sobrenos">Sobre Nós</Nav.Link>
          <Nav.Link href="/cardapio">Cardápio</Nav.Link>
          <Nav.Link href="/formulario">Pedidos Online</Nav.Link>
          <Nav.Link href="/faleconosco">Fale Conosco</Nav.Link>
        </Nav>
      </Navbar>
    </header>
  );
}

export default Header;
