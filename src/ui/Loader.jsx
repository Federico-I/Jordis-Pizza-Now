// eslint-disable-next-line no-unused-vars
import React from 'react';

function Loader() {
  return (
    <div className='absolute inset-0 bg-slate-200/20 backdrop-blur-sm'>
      <div className='loader'>Loader</div>
    </div>
  );
}

export default Loader;

/* 

function Loader() {
  return (
    <div className='absolute inset-0 flex items-center justify-center'>
      <div className='loader'>Loader</div>
    </div>
  );
}


*/