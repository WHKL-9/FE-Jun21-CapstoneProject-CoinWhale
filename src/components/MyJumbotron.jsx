import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import "../App.css";
import { AiFillYoutube, AiFillTwitterCircle } from "react-icons/ai";

const MyJumbotron = () => {
  return (
    <Jumbotron fluid className="myJumbotron">
      <Container>
        <Row>
          <Col xs={12} md={10} className="p-0">
            <span>
              <h1 className="text-white">Discover Your Coin</h1>
              <h6 className="text-white">
                Learn something new about new coins on the market via the
                hottest tweets and videos.
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
          </Col>

          <Col md={2} className="d-none d-md-block ml-auto p-0">
            <span className="whaleDiv d-flex ml-auto">
              <img
                src="https://res.cloudinary.com/demwthyen/image/upload/v1634156343/Coinwhale/SpoutingWhale_vxswmy.png"
                alt="whale"
                className="whaleInJumbotron"
              />
            </span>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default MyJumbotron;
