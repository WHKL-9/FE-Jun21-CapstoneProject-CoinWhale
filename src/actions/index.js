export const fetchCoinData = () => {
  return (dispatch) => {
    //1. Import coingecko-api
    const CoinGecko = require("coingecko-api");

    //2. Initiate the CoinGecko API Client
    const CoinGeckoClient = new CoinGecko();

    const checkAPIStatus = async () => {
      const APIStatus = await CoinGeckoClient.ping();

      if (APIStatus.ok) {
        let data = await CoinGeckoClient.coins.all();
        console.log(data);

        setTimeout(() => {
          dispatch({
            type: "FETCH_COIN_DATA",
            payload: data,
          });

          dispatch(
            {
              type: "FETCH_COIN_LOADING",
              payload: false,
            },
            1000
          );

          dispatch({
            type: "FETCH_COIN_ERROR",
            payload: false,
          });
        });
      }
    };
  };
};
