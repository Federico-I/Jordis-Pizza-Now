// eslint-disable-next-line no-unused-vars
import React from 'react';
import Button from '../../ui/Button';

function UpdateItemQuantity({ pizzaId }) {
  return (
    <div>
      <Button type="round">-</Button>
      <Button type="round">+</Button>
    </div>
  );
}

export default UpdateItemQuantity;