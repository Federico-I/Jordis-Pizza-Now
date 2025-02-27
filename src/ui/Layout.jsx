// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from './Header';
import CartOverview from '../features/cart/CartOverview';

function Layout() {
  return (
    <div>
      <Header />
      <main>
        <h1>Info</h1>
      </main>

      <CartOverview />
    </div>
  )
}

export default Layout