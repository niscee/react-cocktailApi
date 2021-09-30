import React from "react";
import Products from "./components/Products/Products";
import Searchbar from "./components/Searchbar/Searchbar";


const Home = () => {
  return (
    <>
      <Searchbar />
      <Products />
    </>
  );
};

export default Home;
