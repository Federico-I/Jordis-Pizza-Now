// eslint-disable-next-line no-unused-vars
import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "react";
import cartReducer from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    user: useReducer,
    cart: cartReducer,
  },
});

export default store;