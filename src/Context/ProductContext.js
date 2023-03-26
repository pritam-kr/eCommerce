import axios from "axios";
import { ACTIONS } from "./action";
import { productsReducer } from "./Reducer";
 

const {
  useEffect,
  useContext,
  createContext,
  useReducer,
} = require("react");
const productContext = createContext();

const initialState = { products: [], loading: true, error: "" , cart:[], searchValue: ''};

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
          type: ACTIONS.GET_PRODUCTS,
          payload: { products: data, loading: false, error: "" },
        });
      }
    } catch (error) {
      dispatch({
        type: ACTIONS.GET_ERROR,
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
