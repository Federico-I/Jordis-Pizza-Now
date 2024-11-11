// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types,
function Button({ children, disabled, to, type}) {

  const base = "inline-block rounded-full bg-yellow-400 uppercase font-semibold text-stone-800 tracking-wide transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const style = {
    primary: base + "px-4 py-3 md:px-6 md:py-4",
    small: base + "px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary: "inline-block text-sm rounded-full border-2 border-stone-300 uppercase font-semibold text-stone-400 tracking-wide transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
  }

  if (to) 
  return (
      <Link to={to} className={style[type]}>
        {children}
      </Link>
    ); 

  return (
    <button disabled={disabled} className={style[type]} to={to}>
      { children }
    </button>
  )
}

export default Button;