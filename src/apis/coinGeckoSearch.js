//1. Import coingecko-api
const CoinGecko = require("coingecko-api");

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

const getCoinData = async () => {
  let data = await CoinGeckoClient.coins.all();
  console.log(data);
};

export default getCoinData;
