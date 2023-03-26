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

    default:
      return state;
  }
};
