import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar
      bg="primary"
      variant="dark"
      expand="lg"
      className="mt-4 mb-4 rounded"
    >
      <Container>
        <Navbar.Brand>Blog.app</Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/categories">
            Categories
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
