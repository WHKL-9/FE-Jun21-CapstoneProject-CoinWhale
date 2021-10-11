import "../App.css";
import { AiFillYoutube } from "react-icons/ai";
import YoutubeVideo from "./YoutubeVideo";
import { Row, Col } from "react-bootstrap";

const MyYoutube = () => {
  return (
    <>
      <section className="mb-5">
        <h5 className="text-white d-flex flex-row align-items-center mb-3">
          <span className="mr-2 mb-1">
            <AiFillYoutube />
          </span>
          Youtube
        </h5>
        <Row>
          <Col xs={12}>
            <YoutubeVideo />
          </Col>
        </Row>
      </section>
    </>
  );
};

export default MyYoutube;
