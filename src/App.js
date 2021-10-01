import "./App.css";
import MyNavBar from "./components/MyNavBar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Homepage from "./components/Homepage";
import MyFooter from "./components/MyFooter";
import CoinDetails from "./components/CoinDetails";
import FavoriteCoins from "./components/FavoriteCoins";



function App() {

  return (
    <Router>
      <MyNavBar />
      <Switch>
        <Route
          path="/"
          exact
          render={(routerProps) => <Homepage {...routerProps} />}
        />
        <Route
          path="/coin/:id"
          exact
          render={(routerProps) => <CoinDetails {...routerProps} />}
        />
          <Route
          path="/favorite"
          exact
          render={(routerProps) => <FavoriteCoins {...routerProps} />}
        />
      </Switch>
      <MyFooter />
    </Router>
  );
}

export default App;
