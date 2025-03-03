// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigate } from 'react-router-dom';
import Loader from './Loader';

function Layout() {
  const navigation = useNavigate();
  const isLoading = navigation.state === "loading";

  return (
    <div className='layout'>
      {isLoading && <Loader />}

      <Header />
      
      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  )
}

export default Layout;