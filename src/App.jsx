/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './ui/Home';
import Menu from './features/menu/Menu';
import CreateOrder from './features/order/CreateOrder';
import Order from './features/order/Order';
import Cart from './features/cart/Cart';

const router = createBrowserRouter([
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
    path: "/order/:orderId",
    element: <Order />,
  }
])

function App() {
  return <RouterProvider router={router} />;
};

export default App;