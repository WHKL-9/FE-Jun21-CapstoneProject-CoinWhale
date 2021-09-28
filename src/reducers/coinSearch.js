import { initialState } from "../store";

const coinSearchReducer = (state = initialState.coins, action) => {
    switch(action.type){
        case "FETCH_COIN_DATA":
            return {
                ...state,
                results: action.payload
            }
            case "FETCH_COIN_LOADING":
                return {
                  ...state,
                  loading: action.payload,
                };
          
              case "FETCH_COIN_ERROR":
                return {
                  ...state,
                  error: action.payload,
                };
        default: return state
    }
}

export default coinSearchReducer