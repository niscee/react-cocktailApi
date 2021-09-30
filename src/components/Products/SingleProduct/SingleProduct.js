import React from "react";
import'./SingleProduct.css';

const SingleProduct = ({ cocktail }) => {
  return (
    <div className="singleItem-container">
        <img src={cocktail.strDrinkThumb} alt="cocktail" style={{width: "100%", height: "300px"}} />
        <div className="singleItem-text">
            <p id="item-name">{cocktail.strDrink} (cocktail.strAlcoholic)</p>
            <p id="item-instruct">{cocktail.strInstructions}</p>
        </div>
    </div>
    );
};

export default SingleProduct;
