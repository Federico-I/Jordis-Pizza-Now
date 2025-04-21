// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  cart: [],

  // cart: [
  //   {
  //     pizzaId: 12,
  //     name: "Mediterranean",
  //     qunatity: 2,
  //     unitPrice: 16,
  //     totalPrice: 32,
  //   },
  // ],
};

const cartSlice = createSlice({ 
  name: "cart",
  initialState,
  reducer: {
    addItem(state, action) {
      // payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

// Not for large applications - perforamnce issues - get library "reselect"

export const getCartQuantity = (state) => state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getCartPrice = (state) => state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getQuantityById = (id) => (state) => state.cart.cart.find((item) => item.pizzaId === id)?. quantity ?? 0;