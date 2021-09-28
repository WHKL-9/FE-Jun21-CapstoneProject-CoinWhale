import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCoinData } from "../actions";
import { Container, Table, Button } from "react-bootstrap";
import "../App.css";
import {Link} from "react-router-dom"

const mapStateToProps = (state) => ({
  coins: state.coins.results.data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCoins: () => dispatch(fetchCoinData()),
});

const Homepage = ({ fetchCoins, coins }) => {
  useEffect(() => {
    fetchCoins();
  }, []);



  return (
    <Container className="my-4">
      <Table id="coinTable" hover size="sm">
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Coin</th>
            <th>Symbol</th>
            <th>Price(USD)</th>
            <th>High - 24h</th>
            <th>Low - 24h</th>
            <th>Market Cap Change 24h(USD)</th>
            <th>Market Cap(USD)</th>
          </tr>
        </thead>
        <tbody>
          {coins.slice(0, 30).map((coin, index) => {
            return (
              <tr key={coin.id} className="text-center">
                <td>{index + 1}</td>
                <td>
                  <Link to={`/coin/${coin.id}`}>
                      <div className="d-flex flex-column align-items-center p-0 m-0">
                          <span>{<img src={coin.image.small} alt={coin.id} />}</span>
                          <span>{coin.name}</span>
                      </div>
                  </Link>
                </td>
                <td>{coin.symbol}</td>
                <td>{coin.market_data.high_24h.usd}</td>
                <td>{coin.market_data.low_24h.usd}</td>
                <td>{coin.market_data.current_price.ars}</td>
                <td>{coin.market_data.market_cap_change_24h}</td>
                <td>{coin.market_data.market_cap.usd}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
