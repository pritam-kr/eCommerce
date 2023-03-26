import React, { useEffect, useState } from "react";
import "./Nav.css";
import * as Icons from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import { useProductContext } from "../../Context/ProductContext";
import { ACTIONS } from "../../Context/action";
 

export const Nav = () => {
  const { pathname } = useLocation();
  const { state , dispatch} = useProductContext();
  const [seacrhValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  useEffect(()=>{
      dispatch({type: ACTIONS.GET_SEARCH, payload: seacrhValue})
  }, [seacrhValue])

 
  return (
    <nav className="nav">
      <div className="wrapper nav-wrapper">
        <div className="right-side logo-wrapper">
          <div className="logo" onClick={() => navigate("/")}>
            <h2 className="text-h2">Shop now</h2>
          </div>
          <div className="site-title" onClick={() => navigate("/")}></div>
        </div>
        <div className="left-side">
          <input
            type="text"
            value={seacrhValue}
            className="input searchh_bar"
            placeholder="Seacrh"
            onChange={(e) => setSearchValue(e.target.value)}
          />

          {pathname === "/" ? (
            <div className="cart-icon-wrapper">
              <Icons.BiCartAlt
                className="icons cart-icon"
                onClick={() => navigate("/cart")}
              />
              {state.cart.length === 0 ? (
                ""
              ) : (
                <p className="cart-qyt">{state.cart.length}</p>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
};
