// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type }) {

  const base = "bg-yellow-400 uppercase font-semibold text-ston-800 inline-block text-sm tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focuse:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " py-3 px-4 md:px-6 sm:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary: "uppercase font-semibold text-ston-800 inline-block text-sm tracking-wide rounded-full border-2 hover:bg-stone-800 hover:text-stone-800 transition-colors duration-300 focus:bg-stone-300 focus:hover:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focuse:ring-offset-2 disabled:cursor-not-allowed py-2.5 px-4 md:px-6 sm:py-3.5",
  };

  if(to) return <Link to={to} className={styles[type]}>{children}</Link>

  return(
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;

/*

const className = "bg-yellow-400 uppercase font-semibold text-ston-800 py-3 px-4 inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focuse:ring-offset-2 disabled:cursor-not-allowed md:px-6 sm:py-4";

*/
