// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import { Outlet } from 'react-router-dom';

// will implement loaders and menu fetched from apiRestaurant

function AppLayout() {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverview/>
    </div>
  )
}

export default AppLayout;