import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: any = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      const existingItemIndex = state.findIndex(
        (item: any) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        
        state[existingItemIndex].quantity += 1;
      } else {
        state.push({
          ...action.payload,
          quantity: 1, 
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<any>) => {
      const existingItemIndex = state.findIndex(
        (item: any) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1 && state[existingItemIndex].quantity > 1) {
        
        state[existingItemIndex].quantity -= 1;
      } else {
        
        return state.filter((item: any) => item.id !== action.payload.id);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
