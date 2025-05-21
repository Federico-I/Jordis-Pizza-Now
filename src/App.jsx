/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react'
import tailwindcssPlugin from 'prettier-plugin-tailwindcss';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './ui/Home';
import Menu, { loader as menuInfoLoader } from './features/menu/Menu';
import CreateOrder from './features/order/CreateOrder';
import Order, { loader as loadOrder } from './features/order/Order';
import Cart from './features/cart/Cart';
import Layout from './ui/Layout';
import Error from './ui/Error';
import {action as updateOrderAction} from "./features/order/UpdateOrder";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/menu", element: <Menu />, loader: menuInfoLoader, errorElement: <Error /> },
      { path: "/cart", element: <Cart /> },
      { path: "/order/new", element: <CreateOrder /> },
      { path: "/order/:orderId", element: <Order />, loader: loadOrder, errorElement: <Error />, action: updateOrderAction}
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
};

export default App;