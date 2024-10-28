// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

function LinkButton({ children, to }) {
  return (
    <Link to={to} className='text-sm text-blue-500 hover:text-blue-900 hover:underline'>{children}</Link>
  );
}

export default LinkButton