import React from 'react';

const Stats = ({count}) => {
  return (
    <div className='bg-white text-slate-700 h-40 p-4 flex flex-col items-center justify-center rounded shadow'>
      <h2 className='text-2xl font-semibold'>Total Count: {count}</h2>
    </div>
  );
};

export default Stats;