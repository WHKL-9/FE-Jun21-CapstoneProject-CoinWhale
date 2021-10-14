import { Row, Col, Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import "../App.css";

const mapStateToProps = (state) => ({
  coins: state.coins.results.data,
  loading: state.coins.loading,
  error: state.coins.error,

});



const CoinsRow = ({ coins }) => {

  const params = useParams();
  const coinQuery = params.id.toLowerCase();

  const _  = require("lodash"); 
  let array_1 = coins.filter(coin => coin.id !== coinQuery )
  let shuffled_array = _.shuffle(array_1)

  return (
    <Row>
      {coins.length > 0 &&
        shuffled_array.slice(0, 12).map((coin) => (
          <Col xs={2} className="d-flex flex-col justify-content-between mb-2">
            <Link to={`/coin/${coin.id}`} className="text-decoration-none text-white">
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
