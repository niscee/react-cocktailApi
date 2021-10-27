import React from "react";
import { Link } from "react-router-dom";
import "./SingleCoin.css";

const SingleCoin = ({ coin }) => {
  return (
    <>
      <tr>
        <td>
          <img
            src={coin.image}
            alt="coin"
            style={{ width: "30px", height: "30px" }}
          />
        </td>
        <td>{coin.id}</td>
        <td>{coin.symbol}</td>
        <td>{coin.name}</td>
        <td>{coin.market_cap_change_percentage_24h}%</td>
        <td>${coin.market_cap}</td>
        <td>
          <Link to={`coin/${coin.id}`}><button>View</button></Link>
        </td>
      </tr>
    </>
  );
};

export default SingleCoin;
