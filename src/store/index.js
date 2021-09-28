import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import coinSearchReducer from "../reducers/coinSearch";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

// declaring the initial state 
export const initialState = {
    coins:{
        results:[],
        loading: true,
        error: false
    }
}

const persistConfig = {
    key: "root",
    storage,
    transforms: [
      encryptTransform({
        secretKey: process.env.REACT_APP_MY_SECRET_KEY
      })
    ]
  };

  const bigReducer = combineReducers({
    coins: coinSearchReducer
  })

  const persistedReducer = persistReducer(persistConfig, bigReducer);

  export const configureStore = createStore(
    persistedReducer,
    initialState,
    process.env.REACT_APP_DEVELOPMENT ? composeEnhancers(applyMiddleware(thunk)) : compose(applyMiddleware(thunk))
  );
  
  // ! dont forget
  export const persistor = persistStore(configureStore);
