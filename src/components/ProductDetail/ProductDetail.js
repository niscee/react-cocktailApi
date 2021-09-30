import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { MyContext } from "../../context/CocktailState";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const context = useContext(MyContext);
  const { fetchSingleDrink, cocktail } = context;

  useEffect(() => {
    fetchSingleDrink(id);
  }, [cocktail]);

  if (!cocktail) {
    return <h2>Sorry</h2>;
  }

  return (
    <div className="singleItemDetail-container">
      <img
        src={cocktail.strDrinkThumb}
        alt="cocktail"
        style={{ width: "100%", height: "500px" }}
      />
      <div className="singleItem-text">
        <p id="item-instruct">Name: <br />{cocktail.strDrink} (cocktail.strAlcoholic)</p>
        <p id="item-instruct">Instructions: <br /> {cocktail.strInstructions}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
