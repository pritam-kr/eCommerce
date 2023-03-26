import React from "react";
import { ACTIONS } from "../../Context/action";
import { useProductContext } from "../../Context/ProductContext";
import "./Button.css";

const Button = ({ eachProduct }) => {
  const { state, dispatch } = useProductContext();

  const getIncrease = (eachProduct) => {
    dispatch({ type: ACTIONS.GET_INCREASE, payload: eachProduct.id });
  };

  const getDecrease = (eachProduct) => {
    dispatch({ type: ACTIONS.GET_DECREASE, payload: eachProduct.id });
  };

  const getRemove = (eachProduct) => {
    dispatch({ type: ACTIONS.GET_REMOVE, payload: eachProduct.id });
  };
  return (
    <div className="qyt-btn-wrapper">
      {eachProduct.quantity <= 1 ? (
        <button
          className="btn btn-qyt btn-primary btn-decrement "
          onClick={() => getRemove(eachProduct)}
        >
          -
        </button>
      ) : (
        <button
          onClick={() => getDecrease(eachProduct)}
          className="btn btn-qyt btn-primary  btn-decrement "
        >
          -
        </button>
      )}

      <div className="qyt">{eachProduct.quantity}</div>
      <button
        className="btn btn-qyt btn-primary  btn-increment"
        onClick={() => getIncrease(eachProduct)}
      >
        +
      </button>
    </div>
  );
};

export default Button;
