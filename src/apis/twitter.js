import { TwitterClient } from "twitter-api-client";

const getTwitterData = async () => {
  const twitterClient = new TwitterClient({
    apiKey: process.env.REACT_APP_API_KEY,
    apiSecret: process.env.REACT_APP_API_KEY_SECRET,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
    accessTokenSecret: process.env.REACT_APP_ACCESS_TOKEN_SECRET,
    ttl: 120, // seconds. Defaults to 360
    disableCache: true, // Disables the caching behavior. Defaults to 'false'
    maxByteSize: 32000000, // Maximum (approximated) memory size for cache store. Defaults to 16000000.
  });

  const data = await twitterClient.accountsAndUsers.usersSearch({
    q: "twitterDev",
  });
  console.log(data);
};

export default getTwitterData;
