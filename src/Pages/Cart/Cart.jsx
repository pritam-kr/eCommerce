import React from "react";

import "./Cart.css";
import * as Icons from "react-icons/bi";

import { useNavigate } from "react-router-dom";
import { useProductContext } from "../../Context/ProductContext";
import Button from "../../Components/Button/Button";
import { Nav } from "../../Components/Nav/Nav";

const Cart = () => {
  const { state, dispatch } = useProductContext();

  const navigate = useNavigate();

  return (
    <>
      <Nav />
      <section className="section cart-section main_container">
        {state.cart?.length === 0 ? (
          <p className="paragraph">No Items in the Cart</p>
        ) : (
          <div className="wrapper cart-wrapper">
            <header>
              <p className="paragraph" onClick={() => navigate("/")}>
                <Icons.BiArrowBack className="icons back-icon" /> Back to Home
              </p>
              <h2 className="heading">
                Order Summary ( {state.cart.length} items)
              </h2>
            </header>

            <div className="summary-container">
              <div className="cart-items-wrapper">
                <div className="header">
                  <div className="paragraph table-heading">S.No</div>
                  <div className="paragraph table-heading">Items</div>
                  <div className="paragraph table-heading">Qty</div>
                </div>

                <div className="cards">
                  {state.cart.map((item, i) => (
                    <div className="row">
                      <div className="paragraph table-description">
                        {i + 1}.
                      </div>
                      <div
                        className="paragraph table-description"
                        style={{ textAlign: "left" }}
                      >
                        {item.title}
                      </div>
                      <div className="paragraph table-description">
                        <Button eachProduct={item} />
                      </div>
                    </div>
                  ))}
                </div>

                <p
                  className="paragraph add-more-text"
                  onClick={() => navigate("/")}
                >
                  <Icons.BiPlus className="icons plus-icon" /> Add more items
                </p>
              </div>

             
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Cart;
