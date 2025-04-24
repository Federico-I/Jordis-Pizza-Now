/* eslint-disable no-unused-vars */
import React from 'react';
import Button from '../../ui/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './CartSlice';

function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();

  return (
   <div className='flex items-center gap-1 md:gap-3'>
     <Button type="round" onClick={() => dispatch(decreaseItemQuantity(pizzaId))}> - </Button>
     <Button type="round" onClick={() => dispatch(increaseItemQuantity(pizzaId))}> + </Button>
   </div>
  );
}

export default UpdateItemQuantity;