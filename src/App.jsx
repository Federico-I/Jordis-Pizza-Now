// eslint-disable-next-line no-unused-vars
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./features/menu/Menu";
import Home from "./ui/Home";

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/menu",
    element: <Menu />
  }
]);

function App() {
  return <RouterProvider router={router}/>
}

export default App;
