import express from "express";
import sendTweet from "./tweets/route.js";

const server = express();

server.use(express.json());

const PORT = 5000;

server.use("/tweets", tweetsRoute);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

server.on("error", (error) => {
  console.log(`Server is crashed due to :  ${error.message}`);
});
