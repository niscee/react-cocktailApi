import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Error from "./components/Error/Error";
import CoinDetail from "./components/CoinDetail/CoinDetail";
import { CoinState } from "./context/CoinState";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Home';
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <CoinState>
        <div className="container">
          <Navbar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/coin/:id" component={CoinDetail} />
            <Route component={Error} />
          </Switch>
        </div>
      </CoinState>
    </BrowserRouter>
  );
};



export default App;
