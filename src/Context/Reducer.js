export const productsReducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.products,
        loading: action.payload.loading,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
