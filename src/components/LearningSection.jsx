import {useState, useEffect} from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import Tweets from "./Tweets";
import { fetchTweets } from "../actions";
import Typewriter from "typewriter-effect";
import "../App.css";
import Youtube from "./Youtube";

const mapStateToProps = (state) => ({
  favorite: state.favorite.collection,
});

const mapDispatchToProps = (dispatch) => ({
  loadTweets: (coin) => dispatch(fetchTweets(coin)),
});

const LearningSection = ({ favorite, loadTweets }) => {

  const [coinNames, setCoinNames] = useState([])
  useEffect(() => {
    let coinNames = favorite.map(f => f.data.name)
    setCoinNames(coinNames)
  }, [favorite])



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
        <Youtube/>
      </div>
    </section>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LearningSection);
