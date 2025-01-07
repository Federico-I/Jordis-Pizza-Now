// eslint-disable-next-line no-unused-vars
import React from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className='flex gap-1 items-center md:gap-3 '>
      <Button type="round" onClick={() => dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
      <span className='text-sm font-medium'>{currentQuantity}</span>
      <Button type="round" onClick={() => dispatch(increaseItemQuantity(pizzaId))}>+</Button>
    </div>
  );
}

export default UpdateItemQuantity;