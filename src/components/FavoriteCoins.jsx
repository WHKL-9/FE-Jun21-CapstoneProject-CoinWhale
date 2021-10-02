import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { deleteCoinFromFavorite } from "../actions";
import { IoRemoveCircle } from "react-icons/io5";
import "../App.css";
import LearningSection from "./LearningSection";
import { useEffect } from "react";

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
      <Container className="my-5">
        <Row>
          <Col xs={4}>
            <h6>Favorite Coin Collection</h6>
            {favorite.length > 0 &&
              favorite.map((favoriteCoin, index) => {
                return (
                  <Card
                    className="my-2 text-center favoriteCard"
                    key={favoriteCoin.data.id}
                  >
                    <Button
                      variant="outline-danger"
                      className="removeButton ml-auto p-0 d-flex align-items-center justify-content-center"
                      onClick={() => deleteCoin(index)}
                    >
                      <span className="m-0 p-0 removeCircle">
                        <IoRemoveCircle />
                      </span>
                    </Button>
                    <Card.Img
                      variant="top"
                      src={favoriteCoin.data.image.large}
                      className="favoriteCoinImage mx-auto"
                    />
                    <Card.Body>
                      <Card.Title>
                        {favoriteCoin.data.name} ({favoriteCoin.data.symbol})
                      </Card.Title>
                    </Card.Body>
                  </Card>
                );
              })}
          </Col>
          <Col xs={8}>
            <LearningSection />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCoins);
