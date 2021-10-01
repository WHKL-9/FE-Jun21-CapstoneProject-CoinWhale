import { useParams, Link } from "react-router-dom";
import { fetchCoinDetails, addCoinToFavorite } from "../actions";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import MyLoader from "./Loader";
import "../App.css";
import Whale from "../assets/SpoutingWhale.png";
import CoinCarousel from "./CoinCarousel";

const mapStateToProps = (state) => ({
  coinDetails: state.coinDetails.details.data,
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

  useEffect(() => {
    fetchSpecificCoin(coinQuery);
  }, []);

  return (
    // not 100% fully functional
    <>
      {loading && <MyLoader />}
      {coinDetails ? (
        <Container className="my-5">
          <Card>
            <Button
              variant="outline-primary"
              className="d-flex flex-row align-items-center mt-2 mr-2 ml-auto FavoriteButton"
              type="button"
              onClick={()=>addToFavorite(coinDetails)}
            >
              <img src={Whale} alt="whale" className="FavoriteWhale mr-2" />
            Add to Favorite
            </Button>
            <div className="text-center">
              <Card.Img
                variant="top"
                src={coinDetails.image.large}
                className="coinImage mt-2"
              />
            </div>

            <Card.Body>
              <Card.Title className="text-center">
                {coinDetails.name} ({coinDetails.symbol})
              </Card.Title>
              <Card.Text>
                <Row className="mx-auto">
                  <Col xs={12}>
                    <span>
                      <h6>Description: </h6>
                      <p className="coinDescription">
                        {coinDetails.description.en}
                      </p>
                    </span>
                  </Col>
                  <Col xs={6}>
                    <p>Price: ${coinDetails.market_data.current_price.usd}</p>
                    <p>ATH: ${coinDetails.market_data.ath.usd}</p>
                    <p>Market Cap Rank: {coinDetails.market_cap_rank}</p>
                    <p>Market Cap: ${coinDetails.market_data.market_cap.usd}</p>
                    <p>Homepage: {coinDetails.links.homepage[0]}</p>
                  </Col>
                  <Col xs={6}>
                    <p>Category: {coinDetails.categories[0]}</p>
                    <p>
                      Github:{" "}
                      {coinDetails.links.repos_url.github[0]
                        ? coinDetails.links.repos_url.github[0]
                        : "N/A"}
                    </p>
                    <p>
                      Twitter followers:{" "}
                      {coinDetails.community_data.twitter_followers}
                    </p>
                    <p>
                      Reddit Average Post/48h:{" "}
                      {coinDetails.community_data.reddit_average_posts_48h}
                    </p>
                    <p>Developer's forks: {coinDetails.developer_data.forks}</p>
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>

          <CoinCarousel />
        </Container>
      ) : (
        <MyLoader />
      )}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinDetails);
