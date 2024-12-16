// eslint-disable-next-line no-unused-vars
import React from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';

function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <div className='flex gap-1 items-center md:gap-3 '>
      <Button type="round" onClick={() => dispatch()}>-</Button>
      <Button type="round">+</Button>
    </div>
  );
}

export default UpdateItemQuantity;