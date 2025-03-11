/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='bg-red-500 uppercase border-b border-stone-500 bg-yellow-500 px-4 py-3 uppercase'>
      <Link to="/" className='tracking-widest'>Jordi's Pizza Co.</Link>

      <p>Fede</p>
    </header>
  )
}

export default Header