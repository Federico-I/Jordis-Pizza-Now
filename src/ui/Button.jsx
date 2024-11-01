// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types,
function Button({ children, disabled, to, type}) {

  const className = "inline-block rounded-full bg-yellow-400 uppercase font-semibold text-stone-800 py-3 px-4 tracking-wide transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 sm:py-4" ;

  const base = "inline-block rounded-full bg-yellow-400 uppercase font-semibold text-stone-800 py-3 px-4 tracking-wide transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 sm:py-4";

  const style = {
    primary: base + "px-4 py-3 sm:px-6 sm:py-4",
  }

  if (to) 
  return (
      <Link to={to} className={className}>
        {children}
      </Link>
    ); 

  return (
    <button disabled={disabled} className={className} to={to}>
      { children }
    </button>
  )
}

export default Button;