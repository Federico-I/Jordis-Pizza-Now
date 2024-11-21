// eslint-disable-next-line no-unused-vars
import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "react";

const store = configureStore({
  reducer: {
    user: useReducer,
  },
});

export default store;