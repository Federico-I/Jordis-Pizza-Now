/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type}) {

  const className = "bg-yellow-400 px-4 py-3 font-semibold uppercase text-stone-800 tracking-wide hover:bg-yellow-300 transition-colors duration-400 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4";

  const styles = { base: "bg-yellow-400 font-semibold uppercase text-stone-800 tracking-wide hover:bg-yellow-300 transition-colors duration-400 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed",
    primary: "",
  };
  
  if(to) return <Link to={to} className={className}>{children}</Link>

  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  )
}

export default Button;