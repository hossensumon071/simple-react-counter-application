import { useState } from "react";

const Counter = () => {
  const [Count, setCount] = useState(0)
  const increment = () => {
    setCount((prevCount) => prevCount + 1)
  }
  const decrement = () => {
    setCount((prevCount) => prevCount - 1)
  }
  return (
    <div className='p-4 h-auto flex flex-col items-center justify-center bg-white rounded shadow space-y-5'>
      <div className='text-2xl font-semibold'>{Count}</div>
      <div className='flex space-x-3'>
        <button 
        className='bg-indigo-400 text-white px-3 py-2 rounded shadow'
        onClick={increment}
        >
          Increment
        </button>
        <button 
        className='bg-red-400 text-white px-3 py-2 rounded shadow'
        onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;