// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='bg-yellow-500'>
      <Link to="/" className='tracking-widest'>Jordis Pizza Now.Co</Link>

      <p>Fred</p>
    </header>
  );
}

export default Header;