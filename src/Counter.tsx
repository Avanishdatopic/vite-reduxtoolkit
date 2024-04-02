// src/components/Counter.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../src/store';
import { increment, decrement } from '../src/counterSlice';
import { Button } from './components/ui/button';

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center' }}>
    <h2>Counter</h2>
    <div style={{ fontSize: '24px', marginBottom: '20px' }}>
      <span style={{ marginRight: '10px' }}>{count}</span>
      <Button onClick={() => dispatch(increment())}>Increment</Button>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
    </div>
  </div>
  );
};

export default Counter;
