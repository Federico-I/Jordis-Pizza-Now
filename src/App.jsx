// eslint-disable-next-line no-unused-vars
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, { action as actionCreateOrder } from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import AppLayout from "./ui/AppLayout";


//////////////////////////////////////
//          Router - Data
//////////////////////////////////////

// After createRouter6.4 If you want to use new API's for data loaders, Data Fetchers or Data Actions, it's mandatory to use the CreateBrouserRouter structure (syntax) shown below. 

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path:"/", element: <Home />},
      { path:"/menu", element: <Menu />, loader: menuLoader, errorElement: <Error />},
      { path:"/cart", element: <Cart />},
      { path:"/order/new", element: <CreateOrder />, action: actionCreateOrder},
      { path:"/order/:orderId", element: <Order />, loader: orderLoader, errorElement: <Error />},
    ],
  },
]);

function App() {

  return <RouterProvider router={router} />;  

}

export default App;
