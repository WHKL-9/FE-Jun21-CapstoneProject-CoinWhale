import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { deleteCoinFromFavorite } from "../actions";
import { IoRemoveCircle } from "react-icons/io5";
import { AiFillHeart } from "react-icons/ai";
import "../App.css";
import LearningSection from "./LearningSection";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => ({
  favorite: state.favorite.collection,
});

const mapDispatchToProps = (dispatch) => ({
  deleteCoin: (index) => dispatch(deleteCoinFromFavorite(index)),
});

const FavoriteCoins = ({ favorite, deleteCoin }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Container className="my-5 Collection">
        <Row>
          <Col xs={12} md={4}>
            <h4 className="text-white d-flex flex-row align-items-center">
              <span className="mr-2 d-flex align-items-center heartCoin">
                <AiFillHeart />
              </span>
              <span>Collection</span>
            </h4>
            {favorite.length > 0 &&
              favorite.map((favoriteCoin, index) => {
                return (
                  <Container className="pl-0 favoriteCardContainer">
                    <Card
                      className="my-2 text-center favoriteCard"
                      key={favoriteCoin.data.id}
                    >
                      <Button
                        className="removeButton ml-auto p-0 d-flex align-items-center justify-content-center"
                        onClick={() => deleteCoin(index)}
                      >
                        <span className="m-0 p-0 removeCircle">
                          <IoRemoveCircle />
                        </span>
                      </Button>
                      <Link
                        to={`/coin/${favoriteCoin.data.id}`}
                        className="text-decoration-none"
                      >
                        <Card.Img
                          variant="top"
                          src={favoriteCoin.data.image.large}
                          className="favoriteCoinImage mx-auto"
                        />
                        <Card.Body>
                          <Card.Title className="text-white">
                            {favoriteCoin.data.name} ({favoriteCoin.data.symbol}
                            )
                          </Card.Title>
                        </Card.Body>
                      </Link>
                    </Card>
                  </Container>
                );
              })}
          </Col>
          <Col xs={12} md={8}>
            <LearningSection />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCoins);
