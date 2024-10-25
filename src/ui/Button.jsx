// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types,
function Button({ children, disabled }) {
  return (
    <button disabled={disabled} className="inline-block rounded-full bg-yellow-400 uppercase font-semibold text-stone-800 py-3 px-4 tracking-wide transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed">
      { children }
    </button>
  )
}

export default Button