// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase'>
      <Link to="/" className='tracking-widest'>Jordis Pizza Now.Co</Link>

      <p>Fred</p>
    </header>
  );
}

export default Header;