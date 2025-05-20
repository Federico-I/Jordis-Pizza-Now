/* eslint-disable no-unused-vars */
import React from 'react';
import Button from '../../ui/Button';
import { useFetcher } from 'react-router-dom';

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method='PATCH' className='text-right'>
      <Button type="primary">Priority</Button>
    </fetcher.Form>
  )
};

export default UpdateOrder;

async function action({ request, params }) {
  return null;
}