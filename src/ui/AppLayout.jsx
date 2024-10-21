// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './Loader';

// will implement loaders and menu fetched from apiRestaurant

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className='grid h-screen grid-row-[auto_1fr_auto]'>
      {isLoading && <Loader />}

      <Header />

      <div className='my-10 overflow-scroll'>
        <main className='mx-auto max-w-3xls'>
          <Outlet />
        </main>
      </div>
      

      <CartOverview/>
    </div>
  )
}

export default AppLayout;