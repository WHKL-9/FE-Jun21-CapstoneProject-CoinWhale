import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../App.css";

const mapStateToProps = (state) => ({
  coins: state.coins.results.data,
  loading: state.coins.loading,
  error: state.coins.error,
});

const CoinsRow = ({ coins }) => {
  return (
    <Row>
      {coins.length > 0 &&
        coins.slice(0, 12).map((coin) => (
          <Col xs={2} className="d-flex flex-col justify-content-between mb-2">
            <Link to={`/coin/${coin.id}`}>
                <Card key={coin.id} className="text-center CoinCards ">
                  <Card.Img
                    variant="top"
                    src={coin.image.large}
                    alt={coin.id}
                    className="CoinRowsImages mt-2 mx-auto"
                  />
                  <Card.Body>
                    <Card.Title>{coin.name}</Card.Title>
                    <Card.Text>{coin.symbol}</Card.Text>
                  </Card.Body>
                </Card>
            </Link>
          </Col>
        ))}
    </Row>
  );
};

export default connect(mapStateToProps)(CoinsRow);
