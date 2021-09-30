import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Error from "./components/Error/Error";
import About from "./components/About/About";
import { CocktailState } from "./context/CocktailState";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";

const App = () => {
  return (
    <BrowserRouter>
      <CocktailState>
        <div className="container">
          <Navbar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route component={Error} />
          </Switch>
        </div>
      </CocktailState>
    </BrowserRouter>
  );
};



export default App;
