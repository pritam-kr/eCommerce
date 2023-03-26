import axios from "axios";
import { productsReducer } from "./Reducer";

const {
  useState,
  useEffect,
  useContext,
  createContext,
  useReducer,
} = require("react");
const productContext = createContext();

const initialState = { products: [], loading: true, error: "" };

export const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const { data, status } = await axios("https://fakestoreapi.com/products");

    try {
      if (status === 200) {
        dispatch({
          type: "GET_PRODUCTS",
          payload: { products: data, loading: false, error: "" },
        });
      }
    } catch (error) {
      dispatch({
        type: "GET_ERROR",
        payload: {
          products: [],
          loading: false,
          error: "Something happend Try again later",
        },
      });
    }
  };

  return (
    <productContext.Provider value={{ state, dispatch }}>
      {children}
    </productContext.Provider>
  );
};

export const useProductContext = () => useContext(productContext);
