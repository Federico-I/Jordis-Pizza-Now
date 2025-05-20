import React from 'react';
import Button from '../../ui/Button';
import { useFetcher } from 'react-router-dom';

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form>
      <Button type="primary">Priority</Button>
    </fetcher.Form>
  )
};

export default UpdateOrder;