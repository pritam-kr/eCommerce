import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "../../Components/Nav/Nav";
import { useProductContext } from "../../Context/ProductContext";
import "./sp.css";

const SingleProduct = () => {
  const urlStates = useParams();
  const { state, dispatch } = useProductContext();

  const [currentProduct, setCurrentProduct] = useState({});

  useEffect(() => {
    const currestProject =
      state.products?.find((p) => Number(urlStates.id) === p.id) || {};
    setCurrentProduct(currestProject);
  }, [urlStates.id]);

  return (
    <>
      <Nav />
      <div className="main_container">
        <div className="single_product_wrapper">
          <div>
            <img
              src={currentProduct.image}
              alt=""
              className="img-responsive"
            />
          </div>
          <div>
            <h1>{currentProduct.title}</h1>
            <span className="card-price"  >₹ {currentProduct.price}</span>
            <p className="paragraph">{currentProduct.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
