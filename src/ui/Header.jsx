// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
  return (
    <header className='flex items-center justify-around bg-yellow-500 px-4 py-3 uppercase border-b border-stone-500 sm:px-6'>
      <Link to="/" className='tracking-widest'>Jordis Pizza Now.Co</Link>

      <SearchOrder></SearchOrder>

      <p >Fred</p>
    </header >
  );
}

export default Header;

/*
function Header() {
  return (
    <header className='flex items-center justify-around border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6 '>
      <Link to="/" className='tracking-widest'>Jordis Pizza Now.Co</Link>

      <p>Fred</p>
    </header>
  );
}

export default Header;
*/

