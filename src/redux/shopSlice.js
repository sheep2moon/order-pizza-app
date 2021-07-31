import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { supabase } from '../supabaseConfig';

export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
  const { data: items, error } = await supabase.from('items').select('*');
  if (error) {
    console.log(error);
  }
  console.log(items);
  return items;
});

export const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    items: [],
    cart: [],
    status: 'idle',
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
  extraReducers: {
    [fetchItems.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchItems.fulfilled]: (state, action) => {
      state.items.push(...action.payload);
      state.status = 'succed';
    },
    [fetchItems.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error;
    },
  },
});

export const { addToCart, removeFromCart } = shopSlice.actions;
export const selectProduct = (state, productId) =>
  state.shop.items.find((item) => item.id === productId);
export default shopSlice.reducer;
