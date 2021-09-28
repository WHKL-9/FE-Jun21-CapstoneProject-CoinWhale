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
import SpecificCoin from "./components/SpecificCoin";
import getTwitterData from "./apis/twitter";
import { useEffect } from "react";

function App() {
  //testing twitter api
  useEffect(() => {
    getTwitterData();
  }, []);

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
          render={(routerProps) => <SpecificCoin {...routerProps} />}
        />
      </Switch>
      <MyFooter />
    </Router>
  );
}

export default App;
