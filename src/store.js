import { configureStore, createSlice } from "@reduxjs/toolkit";
import CartSlice from "./slice/cart";

const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});

export default store;
