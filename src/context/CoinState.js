import axios from "axios";
import React, { useEffect, useState } from "react";

export const MyContext = React.createContext();

export const CoinState = (props) => {
  const [loading, setLoading] = useState(false);
  const [coins, setCoins] = useState([]);
  const [coin, setCoin] = useState(null);

  const GET_COINS_URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  const GET_SINGLE_COIN_URL = "https://api.coingecko.com/api/v3/coins/";

  // fetching api.
  const fetchCoins = async () => {
    try {
      const response = await axios.get(`${GET_COINS_URL}`);
      const items = await response.data;
      if (items) {
        setCoins([...items]);
      } else {
        setCoins([]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // fetching data filter by Id
  const fetchSingleCoin = async (id) => {
    try {
      const response = await axios.get(
        `${GET_SINGLE_COIN_URL}${id}?developer_data=true`
      );
      const coin = await response.data;
      if (coin) {
        setCoin({ ...coin });
      } else {
        setCoin(null);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchCoins();
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, []);

  return (
    <MyContext.Provider
      value={{
        loading,
        setLoading,
        coins,
        fetchSingleCoin,
        coin,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};
