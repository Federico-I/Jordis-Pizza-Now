// eslint-disable-next-line no-unused-vars
import React from 'react'

function Button({ children, disabled }) {
  return (
    <button disabled={disabled} className="bg-yellow-400 px-4 py-3 font-semibold uppercase text-stone-800 tracking-wide hover:bg-yellow-300 transition-colors duration-400 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed">
      {children}
    </button>
  )
}

export default Button;