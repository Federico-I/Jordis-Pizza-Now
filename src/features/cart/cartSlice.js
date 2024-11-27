// eslint-disable-next-line no-unused-vars
import React from "react";
import reducer from "../user/userSlice";

const initialState = {
  cart: [],
};

const cartSlice = {
  name: "Cart",
  initialState,
};