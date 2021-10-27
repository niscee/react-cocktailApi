import React, { useContext } from "react";
import { MyContext } from "../../context/CoinState";
import SingleCoin from "./SingleCoin/SingleCoin";
import "./Coins.css";
import Loading from "./Loading/Loading";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const Coins = () => {
  const context = useContext(MyContext);
  const { coins, loading, setPage } = context;

  if (coins.length === 0) {
    return (
      <h2 style={{ color: "red", textAlign: "Center" }}>Nothing to display</h2>
    );
  }

  return (
    <>
      <div className="item-container">
        <table id="coins" style={{overflow: "hidden"}}>
          <thead>
            <tr>
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
          {coins.length > 1 ? (
            <>
              {coins.map((coin) => {
                return <SingleCoin key={coin.id} coin={coin} />;
              })}
            </>
          ) : (
            <SingleCoin key={coins[0].id} coin={coins[0]} />
          )}
        </table>
      </div>
      
      <div className="button-container">
        <button
          onClick={() =>
            setPage((prev) => {
              return prev - 1;
            })
          }
          style={{ backgroundColor: "red", color: "white" }}
          title="previous page"
        >
          <BsFillArrowLeftCircleFill />
        </button>
        <button
          onClick={() =>
            setPage((prev) => {
              return prev + 1;
            })
          }
          style={{ backgroundColor: "blue", color: "white" }}
          title="next page"
        >
          <BsFillArrowRightCircleFill />
        </button>
      </div>
    </>
  );
};

export default Coins;
