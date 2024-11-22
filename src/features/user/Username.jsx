// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useSelector } from 'react-redux';

function Username() {
  useSelector( state => state.user.username )
  
  return (
    <div className='hidden text-sm font-semibold md:block'>Fede</div>
  )
}

export default Username;