export const initialState = {
  cartCount: 0
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, cartCount: state.cartCount + 1 };
    case 'decrement':
      return { ...state, cartCount: Math.max(0, state.cartCount - 1) };
    default:
      return state;
  }
};
