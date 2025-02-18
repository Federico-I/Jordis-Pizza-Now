// eslint-disable-next-line no-unused-vars
import React from 'react';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import EmptyCart from "./EmptyCart";
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice';


const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className='px-4 py-3'>
      <LinkButton to="/menu" className="text-sm text-blue-500 hover:text-blue-600 hover:underline">&larr; Back to menu</LinkButton>

      <h2 className='mt-7 text-xl font-semibold'>Your cart, %NAME%</h2>

      <ul className='divide-y divide-stone-200 border-b mt-3'>
        {cart.map((item) => {
          <Cart item={item} key={item.key}/>
        })}
      </ul>

      <div className='mt-6 space-x-2'>
        <Link to="/order/new" type="primary">Order pizzas</Link>
        <Button type="secondary">Clear Cart</Button>
      </div>
    </div>
  );
}

export default Cart;

/*

function Cart() {
  const cart = fakeCart;

  return (
    <div className='px-4 py-3'>
      <LinkButton to="/menu" className="text-sm text-blue-500 hover:text-blue-600 hover:underline">&larr; Back to menu</LinkButton>

      <h2 className='mt-7 text-xl font-semibold'>Your cart, %NAME%</h2>

      <ul className='divide-y divide-stone-200 border-b mt-3'>
        {cart.map((item) => {
          <Cart item={item} key={item.key}/>
        })}
      </ul>

      <div className='mt-6 space-x-2'>
        <Link to="/order/new" type="primary">Order pizzas</Link>
        <Button type="secondary">Clear Cart</Button>
      </div>
    </div>
  );
}

*/