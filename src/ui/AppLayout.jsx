// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from './Header';
import CartOverview from '../features/cart/CartOverview';


function AppLayout() {
  return (
    <div>
      <Header />

      <main>
        <h1>Example</h1>
      </main>

      <CartOverview/>
    </div>
  )
}

export default AppLayout;