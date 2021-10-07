import { initialState } from "../store";

const youtubeReducer = (state = initialState.youtube, action) => {
  switch (action.type) {
    case "FETCH _VIDEOS":
      return {
        ...state,
        videos: action.payload,
      };
    case "FETCH_VIDEOS_LOADING":
      return {
        ...state,
        loading: action.payload,
      };

    case "FETCH_VIDEOS_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default youtubeReducer