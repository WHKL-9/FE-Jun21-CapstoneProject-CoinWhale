import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import Tweets from "./Tweets";

const mapStateToProps = (state) => ({
  favorite: state.favorite.collection,
});

const LearningSection = ({ favorite }) => {

  return (
    <section className="ml-5">
      <h5>
        Learn Something About (add typewriter effect){" "}
      </h5>
      <div>
        {favorite.length > 0 &&
          favorite.map((coin) => {
            return (
              <Button
                key={coin.data.id}
                variant="outline-primary"
                className="mr-2"
              >
                {coin.data.name}
              </Button>
            );
          })}
      </div>
      <div className="mt-5">
        <Tweets/>
      </div>
    </section>
  );
};

export default connect(mapStateToProps)(LearningSection);
