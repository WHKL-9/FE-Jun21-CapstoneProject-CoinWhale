import { initialState } from "../store";

const favoriteReducer = (state = initialState.favorite, action) => {
  switch (action.type) {
    case "ADD_COIN_TO_FAVORITE":
      return {
        ...state,
        collection: [...state.collection, action.payload],
      };
    case "REMOVE_COIN_FROM_FAVORITE":
      return {
        collection: state.collection.filter(
          (coin, index) => index !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default favoriteReducer
