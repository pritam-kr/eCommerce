import { ACTIONS } from "./action";

export const productsReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
        loading: action.payload.loading,
        error: action.payload.error,
      };
    case ACTIONS.GET_SEARCH:
      return { ...state, searchValue: action.payload };

    case ACTIONS.ADD_PRODUCT:
      return { ...state, cart: [...state.cart, action.payload] };

    case ACTIONS.GET_INCREASE:
      return {
        ...state,
        cart: state.cart.map((prod) =>
          prod.id === action.payload
            ? { ...prod, quantity: prod.quantity + 1 }
            : prod
        ),
        products: state.products.map((prod) =>
          prod.id === action.payload
            ? { ...prod, quantity: prod.quantity + 1 }
            : prod
        ),
      };

    case ACTIONS.GET_DECREASE:
      return {
        ...state,
        cart: state.cart.map((prod) =>
          prod.id === action.payload
            ? { ...prod, quantity: prod.quantity - 1 }
            : prod
        ),
        products: state.products.map((prod) =>
          prod.id === action.payload
            ? { ...prod, quantity: prod.quantity - 1 }
            : prod
        ),
      };

    case ACTIONS.GET_REMOVE:
      return {
        ...state,
        cart: state.cart.filter((prod) => prod.id !== action.payload),
      };
    default:
      return state;
  }
};
