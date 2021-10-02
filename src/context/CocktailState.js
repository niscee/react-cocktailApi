import axios from "axios";
import React, { useEffect, useState } from "react";

export const MyContext = React.createContext();

export const CocktailState = (props) => {
  const [loading, setLoading] = useState(false);
  const [cocktails, setCocktails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktail, setCocktail] = useState(null);

  const GET_ITEMS_URL =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  
  const GET_SINGLE_ITEM_URL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

  // fetching api.
  const fetchDrinks = async () => {
    try {
      const response = await axios.get(`${GET_ITEMS_URL}${searchTerm}`);
      const items = response.data;
      if (items.drinks) {
        setCocktails([...items.drinks]);
      }
      else{
        setCocktails([]);
      }
    } catch (err) {
      console.log(err);
    }
  };


  // fetching data filter by Id
  const fetchSingleDrink = async (id) => {
    try {
      const response = await axios.get(`${GET_SINGLE_ITEM_URL}${id}`);
      const items = response.data;
      if (items.drinks) {
        setCocktail(items.drinks[0]);
      }
      else{
        setCocktail(null);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    setLoading(true);
    fetchDrinks();
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, [searchTerm]);

  // setting up user search item.
  const changeTerm = (val) => {
    setSearchTerm(val);
  };

  return (
    <MyContext.Provider
      value={{
        loading,
        setLoading,
        cocktails,
        searchTerm,
        changeTerm,
        fetchSingleDrink,
        cocktail,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};
