// eslint-disable-next-line no-unused-vars
import React from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { deleteItem } from './CartSlice';

function DeleteItem() {
  const dispatch =useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(deleteItem())}>Delete</Button>
  )
};

export default DeleteItem;