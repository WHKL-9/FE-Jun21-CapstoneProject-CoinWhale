import { initialState } from "../store";

const specificCoinReducer = (state = initialState.coinDetails, action) => {
    switch(action.type){
        case "FETCH_COIN_DATA":
            return {
                ...state,
                details: action.payload
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

export default specificCoinReducer