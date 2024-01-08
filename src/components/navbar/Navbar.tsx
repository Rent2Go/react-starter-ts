import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

import "./navbar.css";
import logo from "../../assets/fkeo-logo-dark.png";
import profileImage from "../../assets/profile.jpg";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-bootstrap/lib/Navbar";
import { useSelector } from "react-redux";
import { IoMdCart } from "react-icons/io";
import "./navbar.css"


type Props = {};

const Navbars: React.FC<Props> = (props) => {
  const authContext: any = useContext(AuthContext);
  const cartState = useSelector((state: any) => state.cart.length);


  
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
          {!authContext.isAuthenticated && (
            <Nav.Item className="nav-item">
              <Nav.Link className="nav-link" href={"/login"}>
                Giriş Yap
              </Nav.Link>
            </Nav.Item>
          )}
          <Nav.Item className="nav-item">
            <Nav.Link className="nav-link" href={"/cart"}>
              <IoMdCart /> {cartState > 0 && <span className="cart-count">{cartState}</span>}
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navbars;
