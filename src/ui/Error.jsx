// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function Error() {

  const error = useRouteError();

  return (
    <div>
      <h1>Oops! There has been an error 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton>&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
