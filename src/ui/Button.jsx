/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick}) {

  const className = "bg-yellow-400 px-4 py-3 text-sm font-semibold uppercase text-stone-800 tracking-wide hover:bg-yellow-300 transition-colors duration-400 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4";

  const baseStyle = "bg-yellow-400 font-semibold uppercase text-stone-800 tracking-wide hover:bg-yellow-300 transition-colors duration-400 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = { 
    primary: baseStyle + "px-4 py-3 sm:px-6 sm:py-4",
    samll: baseStyle + "px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary: "inilne-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
  };
  
  if (to) return (
    <Link to={to} className={styles[type]}>{children}</Link>
  );

  if (onClick) return (
    <button onClick={onClick} disabled={disabled} className={className}>
      {children}
    </button>
  );

  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
};

export default Button;