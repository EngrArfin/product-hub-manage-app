/* import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { baseApi } from "../api/api";

interface ProductState {
  products: any[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  isLoading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(baseApi.endpoints.getProducts.matchPending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(
        baseApi.endpoints.getProducts.matchRejected,
        (state, action) => {
          state.isLoading = false;
          state.error = action.error.message ?? "Failed to fetch products";
        }
      )
      .addMatcher(
        baseApi.endpoints.getProducts.matchFulfilled,
        (state, action) => {
          state.isLoading = false;
          state.products = action.payload;
        }
      );
  },
});

export default productSlice.reducer;
 */
