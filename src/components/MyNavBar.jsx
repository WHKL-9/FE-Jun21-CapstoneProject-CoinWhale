import { Navbar, Nav } from "react-bootstrap";
import Whale from "../assets/SpoutingWhale.png";
import "../App.css";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";

const MyNavBar = () => (
  <Navbar className="myNavBar">
    <Navbar.Brand href="#home" className="d-flex flex-row align-items-center">
      <Link to="/" style={{ textDecoration: "none" }}>
        <span className="d-flex flex-row align-items-center logoSpan">
          <span className="logoDiv mr-2 d-flex">
            <img src={Whale} alt="whale" className="logo" />
          </span>
          <h4 className="text-white m-0">CoinWhale</h4>
        </span>
      </Link>
    </Navbar.Brand>
    <Nav className="ml-auto">
      <Link to="/favorite" className="text-decoration-none">
        <h6 className="text-white d-flex flex-row align-items-center mr-4">
          <span className="mr-2 d-flex align-items-center heartCoin">
            <AiFillHeart />
          </span>
          Collection
        </h6>
      </Link>
    </Nav>
  </Navbar>
);

export default MyNavBar;
