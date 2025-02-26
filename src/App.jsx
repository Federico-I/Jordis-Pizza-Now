import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import { createBrowserRouter } from 'react-router-dom';
import Home from './ui/Home';
import Menu from './features/menu/Menu';
import CreateOrder from './features/order/CreateOrder';
import Order from './features/order/Order';

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
    path: "/order/new",
    element: <CreateOrder />
  },
  {
    path: "/order",
    element: <Order />,
  }
])

function App() {
  const x = 23;

  return <div>React Project {x}</div>
}

export default App;