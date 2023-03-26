import React from "react";
import "./Nav.css";
import * as Icons from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
 

export const Nav = () => {
  const { pathname } = useLocation();
 

  const navigate = useNavigate();

  return (
    <nav className="nav">
      <div className="wrapper nav-wrapper">
        <div className="right-side logo-wrapper">
          <div className="logo" onClick={() => navigate("/")}>
           
           <h2 className="text-h2">Shop now</h2>
          </div>
          <div className="site-title" onClick={() => navigate("/")}>
          </div>
        </div>
        <div className="left-side">
          {pathname === "/" ? (
            <div className="cart-icon-wrapper">
              <Icons.BiCartAlt
                className="icons cart-icon"
                onClick={() => navigate("/cart")}
              />
              {/* {cart.length === 0 ? (
                ""
              ) : (
                <p className="cart-qyt">{cart.length}</p>
              )} */}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
};
