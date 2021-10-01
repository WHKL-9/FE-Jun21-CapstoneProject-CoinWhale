import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

const mapStateToProps = (state) => ({
  favorite: state.favorite.collection,
});

const LearningSection = ({ favorite }) => {
  return (
    <section>
      <h5 className="text-center">Learn Something About (add typewriter effect) </h5>
      <div className="text-center">
        {favorite.length > 0 &&
          favorite.map((coin) => {
            return (
              <Button key={coin.id} 
              variant="outline-primary"
              className="mr-2">
                {coin.name}
              </Button>
            );
          })}
      </div>
    </section>
  );
};

export default connect(mapStateToProps)(LearningSection);
