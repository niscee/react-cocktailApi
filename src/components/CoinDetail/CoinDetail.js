import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { MyContext } from "../../context/CoinState";
import "./CoinDetail.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import Loading from "../Coin/Loading/Loading";

const CoinDetail = () => {
  const { id } = useParams();
  const context = useContext(MyContext);
  const history = useHistory();
  const { fetchSingleCoin, coin,  loading } = context;

  useEffect(() => {
    fetchSingleCoin(id);
  }, [id, coin]);

  if (!coin) {
    return <h2>Sorry Something went wrong</h2>;
  }

  return (
    <div className="singleItemDetail-container">
      {loading && <Loading />}
      <div className="coin-button">
        <img
          src={coin.image.large}
          alt="coin"
          style={{ width: "80%", height: "200px" }}
        />
        <p id="rank">Rank #{coin.market_cap_rank}</p>
        <p id="cprice">
          Current Price(aud): ${coin.market_data.current_price.aud}
        </p>
        <p id="tsupply">Total Supply: {coin.market_data.total_supply}</p>
        <a href={coin.links.homepage[0]} target="_blank" rel="noreferrer">
          <p id="homepage">Homepage Url</p>
        </a>
        <button title="Go Back" onClick={() => history.push("/")}>
          <BsFillArrowLeftCircleFill />
        </button>
      </div>
      <div className="singleItem-text">
        <section className="coin-description">
          <h2>{coin.name}</h2>
          <p>{coin.description.en}</p>
        </section>
      </div>
    </div>
  );
};

export default CoinDetail;
