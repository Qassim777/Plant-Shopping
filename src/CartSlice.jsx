import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
    state.items=[...items,action.payload];
    },
    removeItem: (state, action) => {

      const index =state.items.find(plant => plant.name==action.payload);
      state.items.splice(index);
    },
    updateQuantity: (state, action) => {
      const index =state.items.find(plant => plant.name==action.payload.name);
      state.items[index].quantity=action.payload.quantity;
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
