import axios from "axios";
import React, { useEffect, useState } from "react";

export const MyContext = React.createContext();

export const CocktailState = (props) => {
  const [loading, setLoading] = useState(false);
  const [cocktails, setCocktails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("z");

  const GET_ITEMS_URL =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

  // fetching api.
  const fetchDrinks = async () => {
    try {
      const response = await axios.get(`${GET_ITEMS_URL}${searchTerm}`);
      const items = response.data;
      setCocktails([...items.drinks]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchDrinks();
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, [searchTerm]);


  const changeTerm = (val) => {
    setSearchTerm(val);
  }

  return (
    <MyContext.Provider
      value={{
        loading,
        cocktails,
        searchTerm,
        changeTerm
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};
