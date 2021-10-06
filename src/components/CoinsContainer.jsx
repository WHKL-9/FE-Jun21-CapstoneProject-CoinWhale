import { Carousel } from "react-bootstrap";
import { Container } from "react-bootstrap";
import CoinsRow from "./CoinsRow";

const CoinsContainer= () => {
  return (
    <Container className="mt-3 px-0">
      <h6 className="text-white">People Also View</h6>
      <CoinsRow/>
    </Container>
  );
};

export default CoinsContainer;
