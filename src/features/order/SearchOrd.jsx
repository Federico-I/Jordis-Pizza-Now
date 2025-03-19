// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrd() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <inpput placeholder="Enter Order Number" value={query} onChange={(e) => setQuery(e.target.value)} className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:w-72 sm:w-64 focus:outline-none focus:ring focus:ring-yellow-500"/>
    </form>
  )
}

export default SearchOrd;