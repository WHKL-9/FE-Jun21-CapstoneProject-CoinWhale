import { Card, Row, Col } from "react-bootstrap";
import { FaTwitter } from "react-icons/fa";
import "../App.css";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  tweets: state.tweets.data.statuses,
});

const Tweets = ({ tweets }) => {
  return (
    <section>
      <span className="d-flex flex-row align-items-center">
        <FaTwitter className="TwitterLogo" />
        <p className=" ml-2 my-0 py-0">It's what's happening</p>
      </span>
      {tweets.length > 0 &&
        tweets.slice(0, 4).map((tweet) => (
          <Card>
            <Row>
              <Col xs={3}>photo</Col>
              <Col xs={9}>
                <p>
                  {tweet.user.name} @{tweet.user.screen_name} {tweet.created_at}
                </p>

                <p>{tweet.text}</p>
              </Col>
            </Row>
          </Card>
        ))}
    </section>
  );
};

export default connect(mapStateToProps)(Tweets);
