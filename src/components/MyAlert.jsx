import { Alert, Button } from "react-bootstrap";
import { useState } from "react";
import Whale from "../assets/SpoutingWhale.PNG";
import "../App.css";

export const MyAlert = () => {
  const [show, setShow] = useState(true);

  if (show) {
    setTimeout(() => setShow(false), 1500);
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <p> Coin is added to your collection!</p>
      </Alert>
    );
  }
  return (
    <Button
      variant="outline-primary"
      className="d-flex flex-row align-items-center mt-2 mr-2 ml-auto FavoriteButton"
      onClick={() => setShow(true)}
    >
      <img src={Whale} alt="whale" className="FavoriteWhale" />
    </Button>
  );
};

// sketch out an elegant way to connect the whale button, alert, add to favorite
// and remove from favorite 