import { Card, Row, Col, Container } from "react-bootstrap";
import { FaTwitter, FaComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { FiShare } from "react-icons/fi";
import "../App.css";
import { connect } from "react-redux";
import TwitterLoader from "./TwitterLoader"

const mapStateToProps = (state) => ({
  tweets: state.tweets.data.statuses,
  tweetsLoading: state.tweets.loading,
  favorite: state.favorite.collection,
});

const Tweets = ({ tweets,favorite, tweetsLoading }) => {
  return (
    <section className="mb-5">
      <span className="d-flex flex-row align-items-center mb-2">
        <FaTwitter className="TwitterLogo" />
        <h5 className=" ml-2 my-0 py-0 text-white">It's what's happening</h5>
      </span>
      <section className="TweetSection">
        {tweetsLoading && <Container className="pl-4"><TwitterLoader/></Container>}
        {(favorite.length>0 && tweets) &&
          tweets.slice(0, 5).map((tweet) => (
            <Card key={tweet.id} className="TweetCard">
              <Row className="no-gutters TweetCard text-white">
                <Col xs={2} className="mx-0 px-0">
                  <div className="UserImageDiv mt-3 d-flex align-items-center">
                    <img
                      src={tweet.user.profile_image_url}
                      className="UserImage mx-auto"
                      alt="userImage"
                    />
                  </div>
                </Col>
                <Col xs={10} className=" ml-0 pl-0 pr-3">
                  <p className="mt-3 pr-1 mb-0 pb-0">
                    {tweet.user.name} @{tweet.user.screen_name}{" "}
                    {tweet.created_at}
                  </p>
                  <p>{tweet.text}</p>
                </Col>
                <Col xs={10} className="ml-auto">
                  <div className="d-flex flex-row justify-content-between align-items-center  mr-5 pb-2">
                    <div className="d-flex align-items-center">
                      <FaComment />
                    </div>
                    <div className="d-flex align-items-center">
                      <AiOutlineRetweet />
                      <span className="ml-1">{tweet.retweet_count}</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <MdFavorite className="favoriteTweet" />
                      <span className="ml-1">{tweet.favorite_count}</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <FiShare />
                    </div>
                  </div>
                </Col>
              </Row>
            </Card>
          ))}
      </section>
    </section>
  );
};

export default connect(mapStateToProps)(Tweets);
