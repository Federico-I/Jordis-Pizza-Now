/* eslint-disable no-unused-vars */
import React from 'react';
import Button from '../../ui/Button';

function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();

  return (
   <div className='flex items-center gap-1 md:gap-3'>
     <Button type="round" onClick={() => dispatch()}> - </Button>
     <Button type="round"> + </Button>
   </div>
  );
}

export default UpdateItemQuantity;