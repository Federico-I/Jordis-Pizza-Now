import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";

createBrowserRouter([
  {
    path:"/",
    element: <Home />,
  },
  {
    path:"/menu",
    element: <Menu />,
  }
])

function App() {

  return (
    <>
      <div>
       Hello PIzza!
      </div>
    </>
  );
}

export default App;
