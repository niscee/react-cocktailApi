import React, { useContext } from "react";
import { MyContext } from "../../context/CocktailState";
import SingleProduct from "./SingleProduct/SingleProduct";
import "./Products.css";
import Loading from "./Loading/Loading";

const Products = () => {
  const context = useContext(MyContext);
  const { cocktails, loading } = context;

  return (
    <>
      {loading && <Loading />}
      <div className="item-container">
        {cocktails.map((cocktail) => {
          return <SingleProduct key={cocktail.idDrink} cocktail={cocktail} />;
        })}
      </div>
    </>
  );
};

export default Products;
