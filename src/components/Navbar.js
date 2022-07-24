import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
const Navbars = () => {
  return (
    <Navbar bg="white" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/home">
          Idris <span style={{ color: "#00A78E" }}>Qozim</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link as={Link} to="/Home">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/abt">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/ser">
            Services
          </Nav.Link>
          <Nav.Link as={Link} to="/port">
            Portfolio
          </Nav.Link>
          <Nav.Link as={Link} to="/exp">
            Experience
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
