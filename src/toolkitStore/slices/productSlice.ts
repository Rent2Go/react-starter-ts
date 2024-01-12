import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductService from "../../services/ProductService";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (args, thunkAPI) => {
    const state: any = thunkAPI.getState();

    if (state.product.products.length > 0 && !(new Date().getTime() - state.product.lastFetch > 6000)) {
      return state.product.products;
    }
    const service: ProductService = new ProductService();
    const response = await service.getAll();
    return response.data;
    //.productsı tanımıyorrrr
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: "initial",
    products: [] as any[],
    lastFetch: new Date().getTime(),
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      console.log("sending..");
      state.loading = "loading";
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      console.log("here is response..", action);
      state.loading = "loaded";
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      console.log("error..");
      state.loading = "error";
    });
  },
});

export const productReducer = productSlice.reducer;
export const {} = productSlice.actions;
