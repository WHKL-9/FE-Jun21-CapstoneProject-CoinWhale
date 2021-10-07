import { useParams, Link } from "react-router-dom";
import { fetchCoinDetails, addCoinToFavorite } from "../actions";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import MyLoader from "./Loader";
import "../App.css";
import Whale from "../assets/SpoutingWhale.PNG";
import CoinsContainer from "./CoinsContainer";
import CoinDescription from "./CoinDescription";

const mapStateToProps = (state) => ({
  coinDetails: state.coinDetails.details,
  loading: state.coinDetails.loading,
  error: state.coinDetails.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSpecificCoin: (coin) => dispatch(fetchCoinDetails(coin)),
  addToFavorite: (coin) => dispatch(addCoinToFavorite(coin)),
});

const CoinDetails = ({
  fetchSpecificCoin,
  coinDetails,
  loading,
  error,
  addToFavorite,
}) => {
  const params = useParams();
  const coinQuery = params.id.toLowerCase();

  // default mode: set character limit -> show more
  //after showing more -> show less
  //button to control show more or show less

  useEffect(() => {
    fetchSpecificCoin(coinQuery);
  }, [coinQuery]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [coinQuery]);

  return (
    <>
      {loading && <MyLoader />}
      {coinDetails ? (
        <Container className="my-5 text-white">
          <Card className="coinDetailsCard">
            <div className="hexagon"></div>
            <Button
              variant="outline-primary"
              className="d-flex flex-row align-items-center mt-2 mr-2 ml-auto FavoriteButton"
              type="button"
              onClick={() => addToFavorite(coinDetails)}
            >
              <img src={Whale} alt="whale" className="FavoriteWhale" />
            </Button>
            <Row>
              <Col xs={4}>
                <Card.Img
                  variant="top"
                  src={coinDetails.data.image.large}
                  className="coinImage mt-2 ml-4"
                />
              </Col>
              <Col xs={6}>
                <div className="slidecontainer text-center">
                  <div className="d-block text-left mb-1">
                    <strong>Time frame:</strong> 24h
                  </div>
                  <div className="d-flex flex-row mb-2 sliderDiv">
                    <span> ${coinDetails.data.market_data.low_24h.usd}</span>
                    <span className="currentPrice">
                      Current: ${coinDetails.data.market_data.current_price.usd}
                    </span>
                    <span>${coinDetails.data.market_data.high_24h.usd}</span>
                  </div>
                  <input
                    type="range"
                    min={coinDetails.data.market_data.low_24h.usd}
                    max={coinDetails.data.market_data.high_24h.usd}
                    value={coinDetails.data.market_data.current_price.usd}
                    className="slider priceSlider"
                    id="myRange"
                  />
                </div>
              </Col>
            </Row>

            <Card.Body>
              <Card.Text>
                <Row className="mx-auto">
                  <Col xs={4}>
                    <p>
                      <strong>Coin:</strong> {coinDetails.data.name} (
                      {coinDetails.data.symbol})
                    </p>

                    <p>
                      <strong>ATH:</strong> $
                      {coinDetails.data.market_data.ath.usd}
                    </p>
                    <p>
                      <strong>Market Cap Rank:</strong>{" "}
                      {coinDetails.data.market_cap_rank}
                    </p>
                    <p>
                      <strong>Market Cap:</strong> $
                      {coinDetails.data.market_data.market_cap.usd}
                    </p>
                    <p>
                      <strong>Homepage:</strong>{" "}
                      {coinDetails.data.links.homepage[0]}
                    </p>
                    <p>
                      <strong>Category:</strong>{" "}
                      {coinDetails.data.categories[0]}
                    </p>
                    <p>
                      <strong>Github:</strong>{" "}
                      {coinDetails.data.links.repos_url.github[0]
                        ? coinDetails.data.links.repos_url.github[0]
                        : "N/A"}
                    </p>
                    <p>
                      <strong>Twitter followers:</strong>{" "}
                      {coinDetails.data.community_data.twitter_followers}
                    </p>
                    <p>
                      <strong>Reddit Average Post/48h:</strong>{" "}
                      {coinDetails.data.community_data.reddit_average_posts_48h}
                    </p>
                    <p>
                      <strong>Developer's forks:</strong>{" "}
                      {coinDetails.data.developer_data.forks}
                    </p>
                  </Col>
                  <Col xs={8} className="pr-3">
                    <span>
                      <p className="mb-0">
                        <strong>Description:</strong>{" "}
                      </p>
                      <span className="text-justify">
                        {/* some coins dont have description - fix this  */}
                        <CoinDescription />
                      </span>
                    </span>
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>

          <CoinsContainer />
        </Container>
      ) : (
        <MyLoader />
      )}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinDetails);
