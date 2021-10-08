import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import Tweets from "./Tweets";
import { fetchTweets, fetchVideos } from "../actions";
import Typewriter from "typewriter-effect";
import "../App.css";
import MyYoutube from "./MyYoutube";

const mapStateToProps = (state) => ({
  favorite: state.favorite.collection,
});

const mapDispatchToProps = (dispatch) => ({
  loadTweets: (coin) => dispatch(fetchTweets(coin)),
  loadVideos: (query) => dispatch(fetchVideos(query)),
});

const LearningSection = ({ favorite, loadTweets, loadVideos }) => {
  const loadTweetsAndVideos = (query) => {
    loadTweets(query)
    loadVideos(query) 
  }

  const [coinNames, setCoinNames] = useState([]);
  useEffect(() => {
    let coinNames = favorite.map((f) => f.data.name);
    setCoinNames(coinNames);
  }, [favorite]);

  return (
    <section className="ml-5">
      <span className="d-flex flex-row">
        <h5 className="mr-2 text-white"> Learn Something About</h5>
        <h5 className="TypewriterCoin">
          <Typewriter
            options={{
              strings: coinNames,
              autoStart: true,
              loop: true,
            }}
          />
        </h5>
      </span>

      <div>
        {favorite.length > 0 &&
          favorite.map((coin) => {
            return (
              <>
                {/* implement windows onload click on first button */}
                <Button
                  key={coin.data.id}
                  className="mr-2 mb-2 coinButton"
                  onClick={() => loadTweetsAndVideos(coin.data.id)}
                >
                  {coin.data.name}
                </Button>
              </>
            );
          })}
      </div>
      <div className="mt-5">
        <Tweets />
        <MyYoutube/>
      </div>
    </section>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LearningSection);
