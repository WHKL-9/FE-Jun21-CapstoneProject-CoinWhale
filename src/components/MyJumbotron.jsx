import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import "../App.css";
import Whale from "../assets/SpoutingWhale.PNG";

const MyJumbotron = () => {
  return (
    <Jumbotron fluid className="myJumbotron">
      <Container className="d-flex flex-row pr-0">
        <span>
          <h1 className="text-white">Discover Your Coin</h1>
          <h6 className="text-white">
            Learn something new about new coins on the market via the hottest
            tweets and videos.
          </h6>
        </span>

        <span className="whaleDiv d-flex ml-auto ">
          <img src={Whale} alt="whale" className="whaleInJumbotron" />
        </span>
      </Container>
    </Jumbotron>
  );
};

export default MyJumbotron;
