// eslint-disable-next-line no-unused-vars
import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import reducer from "../user/userSlice";

const initialState = {
  cart: [
    {
      pizzaId: 12,
      name: "Mediterranean",
      quantity: 2,
      unitprice: 16,
      totalPrice: 32,
    },
    {
      pizzaId: 12,
      name: "Mediterranean",
      quantity: 2,
      unitprice: 16,
      totalPrice: 32,
    },
  ],
};

const cartSlice = {
  name: "Cart",
  initialState,
  reducer: {
    addItem(state, action) {
      // payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = pizzaId
    },
    increaseitemQuantity(state, action) {},
    decreaseItemQuantity(state, action) {},
    clearCart(state, action) {},
  },
};