import React from "react";
import Loader from "../../Components/Loader/Loader";
import { Nav } from "../../Components/Nav/Nav";
import { ProductCard } from "../../Components/ProductCard/ProductCard";
import { useProductContext } from "../../Context/ProductContext";
import "./Product.css"


const Product = () => {
  const { state, dispatch } = useProductContext();
  console.log(state);

  return (
    <>
      <Nav />
      <div className="main_container">
        {state.loading ? (
          <Loader />
        ) : (
          <div className="product_container">
            {
                state.products?.map(product => <ProductCard eachProduct={product}/>)
            }
          </div>
        )}
      </div>
    </>
  );
};

export default Product;
