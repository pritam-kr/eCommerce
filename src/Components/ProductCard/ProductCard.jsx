import React from "react";
import { useProductContext } from "../../Context/ProductContext";
import Button from "../Button/Button";
import { descriptionShort } from "../utils";
import "./ProductCard.css";




export const ProductCard = ({ eachProduct }) => {
  const addToCartHandler = (card) => {};
  const {state, dispatch} = useProductContext()

  return (
    <div className="card-wrapper">
      <img
        src={eachProduct.image}
        alt={eachProduct.name}
        className="card-img"
      />

      <div className="card-info">
        <div className="card-header">
          <h3 className="heading card-name">{eachProduct.title}</h3>{" "}
          <span className="card-price">₹ {eachProduct.price}</span>
        </div>
        <p className="paragraph card-description">{descriptionShort(eachProduct.description)}</p>
        <div className="card-footer">
          {state.cart.length > 0 ? (
            <Button />
          ) : (
            <button
              className="btn btn-primary btn-add-to-cart"
              onClick={() => addToCartHandler(eachProduct)}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
