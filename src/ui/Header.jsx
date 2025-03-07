/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='bg-red-500 uppercase'>
      <Link to="/" className='tracking-widest'>Jordi's Pizza Co.</Link>

      <p>Fede</p>
    </header>
  )
}

export default Header