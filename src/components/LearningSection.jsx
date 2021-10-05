import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import Tweets from "./Tweets";
import { fetchTweets } from "../actions";
import Typewriter from "typewriter-effect";
import "../App.css";

const mapStateToProps = (state) => ({
  favorite: state.favorite.collection,
});

const mapDispatchToProps = (dispatch) => ({
  loadTweets: (coin) => dispatch(fetchTweets(coin)),
});

const LearningSection = ({ favorite, loadTweets }) => {
  // how do I improve this section - takes too long to load
  let getCoins = document.querySelectorAll(".coinButton");
  let coinNames = [];
  for (let i = 0; i < getCoins.length; i++) {
    coinNames.push(getCoins[i].innerHTML);
  }

  return (
    <section className="ml-5">
      <h5 className="d-flex flex-row">
        <span className="mr-2"> Learn Something About</span>
        <span className="TypewriterCoin">
          <Typewriter
            options={{
              strings: coinNames,
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </h5>

      <div>
        {favorite.length > 0 &&
          favorite.map((coin) => {
            return (
              <>
              {/* implement windows onload click on first button */}
                <Button
                  key={coin.data.id}
                  variant="outline-primary"
                  className="mr-2 mb-2 coinButton"
                  onClick={() => loadTweets(coin.data.id)}
                >
                  {coin.data.name}
                </Button>
              </>
            );
          })}
      </div>
      <div className="mt-5">
        <Tweets />
      </div>
    </section>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LearningSection);
