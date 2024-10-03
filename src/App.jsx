// eslint-disable-next-line no-unused-vars
import React from "react";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AppLayout from "./ui/AppLayout";



//////////////////////////////////////
//          Router - Data
/////////////////////////////////////cd

// After createRouter6.4 If you want to use new API's for data loaders, Data Fetchers or Data Actions, it's mandatory to use the CreateBrouserRouter structure (syntax) shown below. 

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path:"/", element: <Home />},
      { path:"/menu", element: <Menu />, loader: menuLoader},
      { path:"/cart", element: <Cart />},
      { path:"/order/new", element: <CreateOrder />},
      { path:"/order/:orderId", element: <Order />},
    ],
  },
]);

function App() {

  return <RouterProvider router={router} />;  

}

export default App;
