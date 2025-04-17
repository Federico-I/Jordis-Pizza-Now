// eslint-disable-next-line no-unused-vars
import React from 'react';
import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div>
       <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
