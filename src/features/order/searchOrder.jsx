// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

////////////////////////////////////////////////////////////////

function SearchOrder() {
  const [query, setQuery] = useState();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder='Search order #' value={query} onChange={(e) => setQuery(e.target.value)} className='w-28 rounded-full px-4 bg-yellow-100 py-2 text-sm placeholder:text-stone-400 sm:w-64 focus:w-72 transition-all duration-300 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50'/>
    </form>
  )
}

export default SearchOrder;

////////////////////////////////////////////////////////////////
