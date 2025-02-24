// eslint-disable-next-line no-unused-vars
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./features/menu/Menu";
import Home from "./ui/Home";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/cart/CreateOrder";
import Order from "./features/order/Order";

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/menu",
    element: <Menu />
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/order/new",
    element: <CreateOrder />
  },
  {
    path: "/order/:OrderIDn",
    element: <Order />
  },

]);

function App() {
  return <RouterProvider router={router}/>
}

export default App;
