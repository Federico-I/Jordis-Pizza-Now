// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function SearchOrd() {
  const [query, setQuery] = useState("");

  return (
    <inpput placeholder="Search order #" value={query} onChange={(e) => setQuery(e.target.value)}/>
  )
}

export default SearchOrd