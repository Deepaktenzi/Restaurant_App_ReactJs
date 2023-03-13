import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clearItem: (state) => {
      state.items = [];
    },
    removeItem: (state, action) => {
      const idx = state.items.findIndex((val) => val.id == action.payload);
      state.items.splice(idx, 1);
    },
  },
});

export const { addItem, clearItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
