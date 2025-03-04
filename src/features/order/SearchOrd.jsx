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
      <inpput placeholder="Enter Order Number" value={query} onChange={(e) => setQuery(e.target.value)}/>
    </form>
  )
}

export default SearchOrd;