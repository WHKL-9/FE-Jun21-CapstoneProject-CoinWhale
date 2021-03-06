import { useParams } from "react-router-dom";
import { fetchCoinDetails, addCoinToFavorite } from "../actions";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Card, Container, Row, Col } from "react-bootstrap";
import MyLoader from "./Loader";
import "../App.css";
import CoinsContainer from "./CoinsContainer";
import CoinDescription from "./CoinDescription";
import { GiCrownCoin, GiHighKick, GiRank1 } from "react-icons/gi";
import { RiNumbersLine, RiFunctionFill } from "react-icons/ri";
import {
  AiFillHome,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillRedditCircle,
} from "react-icons/ai";
import { CgGitFork } from "react-icons/cg";
import { MdDescription } from "react-icons/md";
import MyAlert from "./MyAlert";

const mapStateToProps = (state) => ({
  coinDetails: state.coinDetails,
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
      {loading && (
        <div className="d-flex align-items-center justify-content-center mx-auto">
          <MyLoader />
        </div>
      )}
      {(!loading && coinDetails && coinDetails.details) && (
        <Container className="my-5 text-white">
          <Card className="coinDetailsCard">
            <MyAlert/>

            <Row>
              <Col xs={12} md={6}>
                <div className="text-center pr-5">
                  <Card.Img
                    variant="top"
                    src={coinDetails.details.data.image.large}
                    className="coinImage"
                  />
                </div>
              </Col>
              <Col xs={12} md={6} className="pr-5">
                <div className="slideContainer text-center">
                  <div className="d-block text-left mb-1">
                    <strong>Time frame:</strong> 24h
                  </div>
                  <div className="d-flex flex-row mb-2 sliderDiv">
                    <span>
                      {" "}
                      $
                      {coinDetails.details.data.market_data.low_24h.usd.toLocaleString()}
                    </span>
                    <span className="currentPrice">
                      Current: $
                      {coinDetails.details.data.market_data.current_price.usd.toLocaleString()}
                    </span>
                    <span>
                      $
                      {coinDetails.details.data.market_data.high_24h.usd.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={coinDetails.details.data.market_data.low_24h.usd * 1000 }
                    max={coinDetails.details.data.market_data.high_24h.usd * 1000 }
                    value={coinDetails.details.data.market_data.current_price.usd * 1000 }
                    className="slider priceSlider"
                    id="myRange"
                  />
                </div>
              </Col>
            </Row>

            <Card.Body>
              <Card.Text>
                <Row>
                  <Col xs={12} md={6} className="pr-0 mr-0">
                    <Row className="mb-2">
                      <Col xs={5} className="d-flex justify-content-end">
                        <span className="mr-1 d-flex align-items-center">
                          <GiCrownCoin />
                        </span>{" "}
                        <strong> Coin:</strong>
                      </Col>
                      <Col xs={7} className="pl-0">
                        {coinDetails.details.data.name} ({coinDetails.details.data.symbol})
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col xs={5} className="d-flex justify-content-end">
                        <span className="mr-1 d-flex align-items-center">
                          <GiHighKick />
                        </span>{" "}
                        <strong> ATH:</strong>
                      </Col>
                      <Col xs={7} className="pl-0">
                        {coinDetails.details.data.market_data.ath.usd.toLocaleString()}{" "}
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col xs={5} className="d-flex justify-content-end">
                        <span className="mr-1 d-flex align-items-center">
                          <GiRank1 />
                        </span>{" "}
                        <strong> Market Cap Rank:</strong>
                      </Col>
                      <Col xs={7} className="pl-0">
                        {coinDetails.details.data.market_cap_rank}{" "}
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col xs={5} className="d-flex justify-content-end">
                        <span className="mr-1 d-flex align-items-center">
                          <RiNumbersLine />
                        </span>
                        <strong> Market Cap:</strong>
                      </Col>
                      <Col xs={7} className="pl-0">
                        $
                        {coinDetails.details.data.market_data.market_cap.usd.toLocaleString()}{" "}
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col xs={5} className="d-flex justify-content-end">
                        <span className="mr-1 d-flex align-items-center">
                          <AiFillHome />
                        </span>
                        <strong> Homepage:</strong>
                      </Col>
                      <Col xs={7} className="pl-0">
                        <a
                          href={coinDetails.details.data.links.homepage[0]}
                          target="_blank"
                          className="text-decoration-none"
                        >
                          {coinDetails.details.data.links.homepage}
                        </a>
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col xs={5} className="d-flex justify-content-end">
                        <span className="mr-1 d-flex align-items-center">
                          <RiFunctionFill />
                        </span>
                        <strong> Category:</strong>
                      </Col>
                      <Col xs={7} className="pl-0">
                        {coinDetails.details.data.categories[0]}
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col xs={5} className="d-flex justify-content-end">
                        <span className="mr-1 mt-1 d-flex">
                          <AiFillGithub />
                        </span>
                        <strong> Github:</strong>
                      </Col>
                      <Col xs={7} className="pl-0">
                        {coinDetails.details.data.links.repos_url.github[0] ? (
                          <a
                            href={coinDetails.details.data.links.repos_url.github[0]}
                            target="_blank" className="text-decoration-none"
                          >
                            {coinDetails.details.data.links.repos_url.github[0].slice(8)}
                          </a>
                        ) : (
                          "N/A"
                        )}
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col xs={5} className="d-flex justify-content-end">
                        <span className="mr-1 d-flex align-items-center">
                          <AiFillTwitterCircle />
                        </span>
                        <strong> Twitter followers:</strong>
                      </Col>
                      <Col xs={7} className="pl-0">
                        {coinDetails.details.data.community_data.twitter_followers.toLocaleString()}
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col xs={5} className="d-flex justify-content-end">
                        <span className="mr-1 d-flex align-items-center">
                          <AiFillRedditCircle />
                        </span>
                        <strong> Reddit Post/48h:</strong>
                      </Col>
                      <Col xs={7} className="pl-0">
                        {coinDetails.details.data.community_data.reddit_average_posts_48h.toLocaleString()}
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col xs={5} className="d-flex justify-content-end">
                        <span className="mr-1 d-flex align-items-center">
                          <CgGitFork />
                        </span>
                        <strong> Developer's forks:</strong>
                      </Col>
                      <Col xs={7} className="pl-0">
                        {coinDetails.details.data.developer_data.forks.toLocaleString()}
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} md={6} className="pr-5">
                    <span>
                      <p className="d-flex flex-row align-items-center mb-0">
                        <span className="mr-1 d-flex align-items-center">
                          <MdDescription />
                        </span>
                        <strong>Description:</strong>{" "}
                      </p>
                      <span className="text-justify">
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
      )}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinDetails);
