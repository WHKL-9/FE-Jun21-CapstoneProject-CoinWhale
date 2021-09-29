import Express from "express";
import Twit from "twit";
import dotenv from "dotenv";

dotenv.config();

const T = new Twit({
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_KEY_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
  strictSSL: true, // optional - requires SSL certificates to be valid.
});

const tweetsRoute = Express.Router();

tweetsRoute.get("/", (req, res) => {
  const { q, count } = req.query;
  T.get("search/tweets", { q, count }, function (err, data, response) {
    res.send(data);
    console.log(data)
    console.log(response)
    
  });

});

export default tweetsRoute;
