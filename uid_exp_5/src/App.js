import React, { useState } from 'react';
import './App.css'

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={decrement} style={{ marginRight: '10px' ,backgroundColor: 'red' }}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default App;
