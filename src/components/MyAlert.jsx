import { Alert, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import Whale from "../assets/SpoutingWhale.PNG";
import "../App.css";
import { connect } from "react-redux";
import { addCoinToFavorite } from "../actions";
import { deleteCoinFromFavorite } from "../actions";
import { IoRemoveCircle } from "react-icons/io5";
import {Link} from "react-router-dom"

const mapStateToProps = (state) => ({
  coinDetails: state.coinDetails.details,
  loading: state.coinDetails.loading,
  error: state.coinDetails.error,
  favorite: state.favorite.collection,
});

const mapDispatchToProps = (dispatch) => ({
  addToFavorite: (coin) => dispatch(addCoinToFavorite(coin)),
  deleteCoin: (index) => dispatch(deleteCoinFromFavorite(index)),
});

const MyAlert = ({ addToFavorite, coinDetails, favorite }) => {
  const [show, setShow] = useState(false);

  const favoriteAndAlert = (coin) => {
    setShow(true);
    addToFavorite(coin);
  };

  const [favoriteCoin, setFavoriteCoin] = useState([]);
  useEffect(() => {
    let favoriteCoins = favorite.map((f) => f.data.id);
    let uniqueFavoriteCoins = [...new Set(favoriteCoins)];
    setFavoriteCoin(uniqueFavoriteCoins);
  });

  if (show) {
    setTimeout(() => setShow(false), 1500);
    return (
      <div className="d-flex">
        <span className="ml-auto">
          <Alert variant="success" onClose={() => setShow(false)} dismissible>
            <p>{coinDetails.data.name} is added to your collection!</p>
          </Alert>
        </span>
      </div>
    );
  }
  return (
    <>
      {favoriteCoin.includes(`${coinDetails.data.id}`) ? (
        <Link to="/favorite" className="text-decoration-none">
          <Button
            variant="outline-primary"
            className="d-flex flex-row align-items-center mt-2 mr-2 ml-auto FavoriteButton"
            
          >
            <span className="m-0 p-0">
              View Collection
            </span>
          </Button>
        </Link>
      ) : (
        <Button
          variant="outline-primary"
          className="d-flex flex-row align-items-center mt-2 mr-2 ml-auto FavoriteButton"
          onClick={() => favoriteAndAlert(coinDetails)}
        >
          <img src={Whale} alt="whale" className="FavoriteWhale" />
        </Button>
      )}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MyAlert);

// sketch out an elegant way to connect the whale button, alert, add to favorite
// and remove from favorite
