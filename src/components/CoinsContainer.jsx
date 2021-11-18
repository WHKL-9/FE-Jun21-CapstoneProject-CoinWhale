import { Container } from "react-bootstrap";
import CoinsRow from "./CoinsRow";

const CoinsContainer= () => {
  return (
    <Container className="mt-5 px-0">
      <h5 className="text-white">People Also View</h5>
      <CoinsRow/>
    </Container>
  );
};

export default CoinsContainer;
