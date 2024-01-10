import React, { useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import logo from "../../assets/logo-dark.png";
import profileImage from "../../assets/profile.jpg";
import { AuthContext } from "../../contexts/AuthContext";
import { useSelector } from "react-redux";
import { IoMdCart } from "react-icons/io";
import { IoMdLogIn } from "react-icons/io";

import "./navbar.css";

type Props = {};

const Navbars: React.FC<Props> = (props) => {
  const cartState = useSelector((state: any) => state.cart);

  useEffect(() => {
    localStorage.setItem("token", "abc");
    localStorage.setItem("user", "feyza");
    let user = localStorage.getItem("user")
  
    console.log(user);
    
  })
  const authContext: any = useContext(AuthContext);
  console.log("cartState", cartState);

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
                <IoMdLogIn />
              </Nav.Link>
            </Nav.Item>
          )}
          <Nav.Item className="nav-item">
            <Nav.Link className="nav-link position-relative" href={"/cart"}>
              <IoMdCart />
              <span className="position-absolute top-10 left-0  start-75 translate-small badge rounded bg-light text-dark opacity-50">
                {cartState.cartItems.length}
              </span>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navbars;
