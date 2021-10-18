import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCoinData, fetchTweets } from "../actions";
import { Container, Table, Button } from "react-bootstrap";
import "../App.css";
import { Link } from "react-router-dom";
import MyLoader from "./Loader";
import MyJumbotron from "./MyJumbotron";

const mapStateToProps = (state) => ({
  coins: state.coins.results.data,
  loading: state.coins.loading,
  error: state.coins.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCoins: () => dispatch(fetchCoinData()),
  fetchTweets: () => dispatch(fetchTweets()),
});

const Homepage = ({ fetchCoins, coins, loading, error, fetchTweets }) => {
  useEffect(() => {
    fetchCoins();
  }, []);

  const rounded = (number) => {
    return Math.round((number + Number.EPSILON) * 100) / 100;
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  return (
    <>
      <MyJumbotron />
      {loading && (
        <div className="text-center">
          <MyLoader />
        </div>
      )}

      {!loading && (
        <Container className="my-4 HomepageContainer">
          <Table id="coinTable" hover size="sm">
            <thead>
              <tr className="text-center tableHead">
                <th>#</th>
                <th>Coin</th>
                <th>Symbol</th>
                <th>Price(USD)</th>
                <th>Low - 24h</th>
                <th>High - 24h</th>
                <th>Price Change - 24h</th>
                <th>Market Cap(USD)</th>
              </tr>
            </thead>
            <tbody className="text-white tableBody ">
              {coins.map((coin, index) => {
                return (
                  <tr key={coin.id} className="text-center tableCell">
                    <td>{index + 1}</td>
                    <td>
                      <Link
                        to={`/coin/${coin.id}`}
                        className="text-decoration-none"
                      >
                        <div className="d-flex flex-column align-items-center p-0 m-0">
                          <span>
                            {<img src={coin.image.small} alt={coin.id} />}
                          </span>
                          <a className="text-decoration-none coinName">
                            {coin.name}
                          </a>
                        </div>
                      </Link>
                    </td>
                    <Link
                      to={`/coin/${coin.id}`}
                      className="text-decoration-none text-white"
                    >
                      <td>{coin.symbol}</td>
                    </Link>
                    <td>
                      {coin.market_data.current_price.usd.toLocaleString()}
                    </td>
                    <td>{coin.market_data.low_24h.usd.toLocaleString()}</td>
                    <td>{coin.market_data.high_24h.usd.toLocaleString()}</td>
                    <td
                      style={{
                        color:
                          coin.market_data.price_change_percentage_24h > 0
                            ? "#098551"
                            : "#CF202F",
                      }}
                    >
                      {coin.market_data.price_change_percentage_24h.toLocaleString()} %
                    </td>
                    <td>{coin.market_data.market_cap.usd.toLocaleString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      )}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
