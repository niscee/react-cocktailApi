import React, { useContext } from "react";
import { MyContext } from "../../context/CoinState";
import SingleCoin from "./SingleCoin/SingleCoin";
import "./Coins.css";
import Loading from "./Loading/Loading";

const Coins = () => {
  const context = useContext(MyContext);
  const { coins, loading } = context;

  const coinTitle = {
    position: "sticky",
    top: "0",
    zIndex: "100",
  };

  if (coins.length===0) {
    return <h2 style={{color: "red", textAlign: "Center"}}>Sorry Something went wrong</h2>;
  }

  return (
    <div className="item-container">
      <table id="coins">
        <thead>
          <tr style={coinTitle}>
            <th>Logo</th>
            <th>Id</th>
            <th>Symbol</th>
            <th>Name</th>
            <th>24h</th>
            <th>Mkt Cap</th>
            <th>Action</th>
          </tr>
        </thead>
        {loading && <Loading />}
        <tbody>
          <>
            {coins.map((coin) => {
              return <SingleCoin key={coin.id} coin={coin} />;
            })}
          </>
        </tbody>
      </table>
    </div>
  );
};

export default Coins;
