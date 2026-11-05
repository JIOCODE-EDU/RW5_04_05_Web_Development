import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link , NavLink } from "react-router-dom";

function Navigation() {
  return (
    <>
      <Navbar className="bg-primary">
        <Container>
          <NavLink to="/">
          <Navbar.Brand href="#home" className="">
            Navbar
          </Navbar.Brand>
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/">
              <Nav.Link className="" href="#home">
                Home
              </Nav.Link>
            </NavLink>
            <NavLink to="/about">
              <Nav.Link className="" href="#about">
                About
              </Nav.Link>
            </NavLink>
            <NavLink to="/contact">
              <Nav.Link className="" href="#contact">
                Contact
              </Nav.Link>
            </NavLink>
            <NavLink to="/feature">
              <Nav.Link className="" href="#features">
                Features
              </Nav.Link>
            </NavLink>
            <NavLink to="/pricing">
              <Nav.Link className="" href="#pricing">
                Pricing
              </Nav.Link>
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Navigation;
