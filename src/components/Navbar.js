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
          <Nav.Link as={Link} to="/Home" eventKey="1">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/abt" eventKey="2">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/ser" eventKey="3">
            Services
          </Nav.Link>
          <Nav.Link as={Link} to="/port" eventKey="4">
            Portfolio
          </Nav.Link>
          <Nav.Link as={Link} to="/exp" eventKey="5">
            Experience
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
