import React, { useState } from 'react';
import './style.css'; // Assuming styles for centering already exist

const Counter = () => {
    // Define state for the counter
    const [count, setCount] = useState(0);

    // Handler functions for increment, decrement, and reset
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div className="page-container">
            <h1>Counter: {count}</h1>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
};

export default Counter;
