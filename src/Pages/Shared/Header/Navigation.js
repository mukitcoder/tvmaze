import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            {" "}
            <Link
              to="/"
              className="text-decoration-none text-white fw-bolder fs-3"
            >
              TvMaze
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link
                to="/"
                className="text-decoration-none text-white fw-bold me-4"
              >
                Home
              </Link>
              <Link
                to="about"
                className="text-decoration-none text-white fw-bold me-4"
              >
                About Us
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
