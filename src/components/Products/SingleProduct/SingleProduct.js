import React from "react";
import { Link } from "react-router-dom";
import'./SingleProduct.css';

const SingleProduct = ({ cocktail }) => {
  return (
    <div className="singleItem-container">
        <img src={cocktail.strDrinkThumb} alt="cocktail" style={{width: "100%", height: "300px"}} />
        <div className="singleItem-text">
            <p id="item-name">{cocktail.strDrink} (cocktail.strAlcoholic)</p>
            <p id="item-instruct">{cocktail.strInstructions}</p>
            <Link to={`cocktail/${cocktail.idDrink}`}><button style={{backgroundColor: "gold", padding: "5px"}}>DETAILS</button></Link>
        </div>
    </div>
    );
};

export default SingleProduct;
