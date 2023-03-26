import React from "react";
import Loader from "../../Components/Loader/Loader";
import { Nav } from "../../Components/Nav/Nav";
import { ProductCard } from "../../Components/ProductCard/ProductCard";
import { useProductContext } from "../../Context/ProductContext";
import "./Product.css";

const Product = () => {
  const { state, dispatch } = useProductContext();
  console.log(state);

  const getSearchedProduct = (seacrhValue, array) => {
    const copied = [...array];

    if (!seacrhValue) return copied;
    return copied.filter((prod) =>
      prod.title.toLowerCase().includes(seacrhValue.toLowerCase())
    );
  };

  return (
    <>
      <Nav />
      <div className="main_container">
        {state.loading ? (
          <Loader />
        ) : getSearchedProduct(state.searchValue, state.products).length ? (
          <div className="product_container">
            {getSearchedProduct(state.searchValue, state.products)?.map(
              (product) => (
                <ProductCard eachProduct={product} />
              )
            )}
          </div>
        ) : (
          <p className="text-lg center">No product found!</p>
        )}
      </div>
    </>
  );
};

export default Product;
