import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import "../App.css";
import Whale from "../assets/SpoutingWhale.PNG";
import { AiFillYoutube, AiFillTwitterCircle } from "react-icons/ai";

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
          <span className="spanInJumbotron d-flex align-items-center">
            <span className="ml-2 mr-4 iconsInJumbotron ">
              <AiFillTwitterCircle />
            </span>
            <span className="mr-5 iconsInJumbotron">
              <AiFillYoutube />
            </span>
          </span>
        </span>

        <span className="whaleDiv d-flex ml-auto ">
          <img src={Whale} alt="whale" className="whaleInJumbotron" />
        </span>
      </Container>
    </Jumbotron>
  );
};

export default MyJumbotron;
