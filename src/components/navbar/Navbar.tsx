import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

import "./navbar.css";
import logo from "../../assets/fkeo-logo-dark.png";
import profileImage from "../../assets/profile.jpg";

type Props = {};

const Navbars: React.FC<Props> = (props) => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} width={64} alt="logo" />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/products">Products</Nav.Link>
          <Nav.Link href="/categories">Categories</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Item>
            <Image
              src={profileImage}
              width={40}
              height={40}
              roundedCircle
              alt="Profile"
            />
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navbars;
