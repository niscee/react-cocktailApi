import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Error from "./components/Error/Error";
import CoinDetail from "./components/CoinDetail/CoinDetail";
import { CoinState } from "./context/CoinState";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";

const App = () => {
  return (
    <BrowserRouter>
      <CoinState>
        <div className="container">
          <Navbar />
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <>
                  <Searchbar />
                  <Home />
                </>
              )}
            />
            <Route path="/coin/:id" component={CoinDetail} />
            <Route component={Error} />
          </Switch>
        </div>
      </CoinState>
    </BrowserRouter>
  );
};

export default App;
