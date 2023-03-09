import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import logo from "../../images/logo.png";
import "./style.css";

const NavBar = () => {
  return (
    <Navbar expand="lg" bg="white" className="boxShadaw p-3">
      <Container>
        <Navbar.Brand href="/">
          <img alt="logo" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
};

export default NavBar;
