import React from "react";
import { useNavigate } from "react-router-dom";
import { ACTIONS } from "../../Context/action";
import { useProductContext } from "../../Context/ProductContext";
import Button from "../Button/Button";
import { descriptionShort } from "../utils";
import "./ProductCard.css";
 

export const ProductCard = ({ eachProduct }) => {
  const { state, dispatch } = useProductContext();

  const addToCartHandler = (product) => {
    dispatch({ type: ACTIONS.ADD_PRODUCT, payload: product });
  };

  const navigate = useNavigate()


  const getNavigate = () => {
    navigate(`/product/${eachProduct.id}`)
  }

  return (
    <div className="card-wrapper">
      <img
        src={eachProduct.image}
        alt={eachProduct.name}
        className="card-img"
        onClick={getNavigate}
      />

      <div className="card-info">
        <div className="card-header">
          <h3 className="heading card-name"  onClick={getNavigate}>{eachProduct.title}</h3>{" "}
          <span className="card-price"  onClick={getNavigate}>₹ {eachProduct.price}</span>
        </div>
        <p className="paragraph card-description"  onClick={getNavigate}>
          {descriptionShort(eachProduct.description)}
        </p>
        <div className="card-footer">
          {state.cart.some(p => p.id === eachProduct.id) ? (
            <Button eachProduct={eachProduct}/>
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
