import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import logo from "../../assets/fkeo-logo-dark.png"

type Props = {};

const Navbars: React.FC<Props> = (props) => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/"><img src={logo} width={64} alt="logo"/></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/products">Products</Nav.Link>
          <Nav.Link href="#pricing">Categories</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navbars;
