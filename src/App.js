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
import {useEffect} from "react"
import getCoinData from "./apis/coinGeckoSearch";

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
      </Switch>
      <MyFooter/>
    </Router>
  );
}

export default App;
