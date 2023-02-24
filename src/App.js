import React, { useState } from 'react';
import Counter from './components/Counter';
import Stats from './components/Stats';

const inititalState = [
  {
    id: 1,
    count: 0,
  },
  {
    id: 2,
    count: 0,
  },
  {
    id: 3,
    count: 0,
  },
  {
    id: 4,
    count: 0,
  },
]

const App = () => {
  const [state, setState] = useState(inititalState);
  const totalCount = () => {
    return state.reduce((total, counter) => total + counter.count, 0);
  }
  const increment = (id) => {
    const updatedState = state.map((c) => {
      if(c.id === id) {
        return {
          ...c,
          count: c.count + 1
        }
      }
      return {...c}
    });
    setState(updatedState);
  }
  const decrement = (id) => {
    const updatedState = state.map((c) => {
      if(c.id === id) {
        return {
          ...c,
          count: c.count - 1
        }
      }
      return {...c}
    })
    setState(updatedState);
  }
  return (
    <div className='w-screen h-screen p-10 bg-gray-100 text-slate-700'>
      <h1 className='max-w-md mx-auto text-center text-2xl font-bold'>Counter Application</h1>
      <div className='max-w-md mx-auto text-center mt-10 space-y-5'>
        {
          state.map((count) => 
            <Counter 
               increment={increment} 
               decrement={decrement}
               key={count.id}
               count={count.count}
               id={count.id}
               />
          )
        }
        <Stats count={totalCount()}/>
      </div>
    </div>
  );
};

export default App;