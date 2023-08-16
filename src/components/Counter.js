import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { incrementCounter, resetCounter, decrementCounter } from '../services/actions/counterAction';

const  Counter = () => {
  
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    const handleIncrement = () => {
      dispatch(incrementCounter());
    };

    const handleReset = () => {
      dispatch(resetCounter());
    };

    const handleDecrement = () => {
      dispatch(decrementCounter())
    };

  return (
    <div>
        <h2>Counter App </h2>

        <h3>Count : 0 </h3>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter

//Counter -> Counter2 -> Counter3 -> Counter4

// 1.state - count : 0
// 2.actions - increment, decrement, reset
// 3.reducers - increment -> count => count + 1
// - decrements -> count => count -1
// - reset -> count => 0
// 4. store

// index.js -> App.js -> Counter.js
