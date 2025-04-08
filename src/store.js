/* eslint-disable no-unused-vars */
import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";

const store = configureStore({ 
  reducer: {
    user: userReducer,
    },
 });

 export default store;