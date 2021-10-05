// fetch all coins
export const fetchCoinData = () => {
  return (dispatch) => {
    //1. Import coingecko-api
    const CoinGecko = require("coingecko-api");

    //2. Initiate the CoinGecko API Client
    const CoinGeckoClient = new CoinGecko();

    const getCoinData = async () => {
      let data = await CoinGeckoClient.coins.all();
      console.log(data.data);

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
    };
    // dont forget to call the function
    getCoinData();
  };
};

// fetch specific coin
export const fetchCoinDetails = (coin) => {
  return (dispatch) => {
    //1. Import coingecko-api
    const CoinGecko = require("coingecko-api");

    //2. Initiate the CoinGecko API Client
    const CoinGeckoClient = new CoinGecko();

    const getCoinDetail = async () => {
      let data = await CoinGeckoClient.coins.fetch(`${coin}`, {});
      console.log(data);

      setTimeout(() => {
        dispatch({
          type: "FETCH_COIN_DETAIL",
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
    };
    getCoinDetail();
  };
};

export const addCoinToFavorite = (coin) => ({
  type: "ADD_COIN_TO_FAVORITE",
  payload: coin,
});

export const deleteCoinFromFavorite = (index) => ({
  type: "REMOVE_COIN_FROM_FAVORITE",
  payload: index,
});

export const fetchTweets = (coin) => {
  return (dispatch) => {
    const getTweets = async () => {
      let response = await fetch(
        `http://localhost:5000/tweets?q=${coin}&count=10`,
        {
          method: "GET",
        }
      );
      if(response.ok){
        let data = await response.json()
        console.log(data);

        setTimeout(() => {
          dispatch({
            type: "FETCH _TWEETS",
            payload: data,
          });
  
          dispatch(
            {
              type: "FETCH_TWEETS_LOADING",
              payload: false,
            },
            1000
          );
  
          dispatch({
            type: "FETCH_TWEETS_ERROR",
            payload: false,
          });
        });
      }

     
    };
    getTweets();
  };
};
