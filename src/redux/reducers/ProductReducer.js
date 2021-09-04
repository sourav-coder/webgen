const initialState = [];

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_PRODUCT":
      state = action.payload;
      return state;
    case "SEARCH_PRODUCT":
      console.log(action.payload);
      state = action.payload;
      return state;
    case "ADD_PRODUCT":
      if (state.length > 1) {
        state.push(action.payload);
        console.log(state);
        return state;
      } else return state;

    default:
      return state;
  }
};

export default ProductReducer;
