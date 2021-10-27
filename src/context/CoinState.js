import axios from "axios";
import React, { useEffect, useState } from "react";

export const MyContext = React.createContext();

export const CoinState = (props) => {
  const [loading, setLoading] = useState(false);
  const [coins, setCoins] = useState([]);
  const [coin, setCoin] = useState(null);
  const [searchkey, setSearchkey] = useState("");
  const [page, setPage] = useState(2);

  const GET_COINS_URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=10&page=";

  const GET_SINGLE_COIN_URL = "https://api.coingecko.com/api/v3/coins/";


  // get searched coin.
  const searchCoin = async () => {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&ids=${searchkey}&per_page=10&page=1&s`
    );
    const items = await response.data;
    if (items) {
      setCoins([...items]);
    } else {
      setCoins([]);
    }
  };

  // fetching coins.
  const fetchCoins = async () => {
    try {
      if (!searchkey) {
        const response = await axios.get(`${GET_COINS_URL}${page}&sparkline=false`);
        const items = await response.data;
        if (items) {
          setCoins([...items]);
        } else {
          setCoins([]);
        }
      } else {
        searchCoin();
      }
    } catch (err) {
      console.log(err);
    }
  };

  // fetching coin based on id.
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

  // setting up user search item.
  const changeTerm = (val) => {
    setSearchkey(val);
  };

  useEffect(() => {
    setLoading(true);
    fetchCoins();
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, [searchkey, page]);

  return (
    <MyContext.Provider
      value={{
        loading,
        setLoading,
        coins,
        fetchSingleCoin,
        coin,
        changeTerm,
        searchkey,
        fetchCoins,
        setPage
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};
