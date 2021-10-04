import { initialState } from "../store";

const tweetsReducer = (state = initialState.tweets, action) => {
  switch (action.type) {
    case "FETCH _TWEETS":
      return {
        ...state,
        data: action.payload,
      };
    case "FETCH_TWEETS_LOADING":
      return {
        ...state,
        loading: action.payload,
      };

    case "FETCH_TWEETS_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default tweetsReducer
