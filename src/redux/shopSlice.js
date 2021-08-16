import { createSlice } from '@reduxjs/toolkit';

export const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    cart: [],
    currentProduct: [],
    error: null,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.uniqueId !== action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart } = shopSlice.actions;
export default shopSlice.reducer;
// export const selectProduct = (state, productId) =>
//   state.shop.items.find((item) => item.id === productId);
