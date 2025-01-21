/* "use client";
import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/api";

import loginReducer from "./features/loginSlice";
 import signupReducer from "./features/signupSlice";
import productReducer from "./features/productSlice"; 

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    login: loginReducer,
    signup: signupReducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
 */
