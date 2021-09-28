import { Navbar, Nav } from "react-bootstrap";
import Whale from "../assets/SpoutingWhale.png"
import "../App.css"


const MyNavBar = () => (
  <Navbar bg="dark" className="myNavBar">
    <Navbar.Brand href="#home" className="d-flex flex-row align-items-center">
      <div className="logoDiv mr-2 d-flex">
        <img src={Whale} alt="whale" className="logo"/>
      </div>
      <div className="text-white">CoinWhale</div>
    </Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link className="text-white">Discover Coin</Nav.Link>
      <Nav.Link className="text-white">Learn</Nav.Link>
    </Nav>
  </Navbar>
);

export default MyNavBar;

