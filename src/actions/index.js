// fetch all coins
export const fetchCoinData = () => {
  return (dispatch) => {
    dispatch({
      type: "FETCH_COIN_LOADING",
      payload: true,
    });
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
    dispatch({
      type: "FETCH_COIN_LOADING",
      payload: true,
    });
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

// twitter
export const fetchTweets = (coin) => {
  return (dispatch) => {
    dispatch({
      type: "FETCH_TWEETS_LOADING",
      payload: true,
    });
    const getTweets = async () => {
      let response = await fetch(
        `https://capstone-twitter.herokuapp.com/tweets?q=${coin}&count=10`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);

        setTimeout(() => {
          dispatch({
            type: "FETCH_TWEETS_LOADING",
            payload: true,
          });
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

// youtube
export const fetchVideos = (query) => {
  return (dispatch) => {
    dispatch({
      type: "FETCH_VIDEOS_LOADING",
      payload: true,
    });
    const URL = "https://www.googleapis.com/youtube/v3/search";
    const getYoutubeVideos = async () => {
      let response = await fetch(
        `${URL}?part=snippet&q=${query}&type=video&relevanceLanguage=en&key=${process.env.REACT_APP_YOUTUBE_API}`
      );
      if (response.ok) {
        let data = await response.json();
        setTimeout(() => {
          dispatch({
            type: "FETCH_VIDEOS_LOADING",
            payload: true,
          });
          dispatch({
            type: "FETCH _VIDEOS",
            payload: data,
          });

          dispatch(
            {
              type: "FETCH_VIDEOS_LOADING",
              payload: false,
            },
            1000
          );

          dispatch({
            type: "FETCH_VIDEOS_ERROR",
            payload: false,
          });
        });
      }
    };

    getYoutubeVideos();
  };
};
