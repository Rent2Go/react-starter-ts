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
        // Ürün zaten sepette var, quantity'yi artır
        state[existingItemIndex].quantity += 1;
      } else {
        // Ürün sepette yok, yeni ürünü ekle
        state.push({
          ...action.payload,
          quantity: 1, // Yeni eklenen ürünün quantity'si 1 olarak ayarlanır
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<any>) => {
      const existingItemIndex = state.findIndex(
        (item: any) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1 && state[existingItemIndex].quantity > 1) {
        // Ürün zaten sepette var, quantity'yi artır
        state[existingItemIndex].quantity -= 1;
      } else {
        // Ürün sepette yok, yeni ürünü ekle
        return state.filter((item: any) => item.id !== action.payload.id);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
