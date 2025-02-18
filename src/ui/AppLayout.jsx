// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './Loader';

// Outlet comp on React will render whatever is the current nested route, in this case anything in AppLayout

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return(
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />

      <div className='overflow-scroll'>
        <main className="mx-auto max-w-3xl">
          <Outlet /> 
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;

/*

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return(
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />

      <div className='overflow-scroll'>
        <main className="mx-auto max-w-3xl">
          <Outlet /> 
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;

*/

