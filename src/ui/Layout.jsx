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
    <div className='grid h-screen grid-row-[auto_1fr_auto] '>
      {isLoading && <Loader />}

      <Header />
      
      <div className='overflow-scroll'>
        <main className='max-auto max-w-3xl w-20 bg-red-500'>
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  )
}

export default Layout;