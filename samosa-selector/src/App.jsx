import { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => setCount(count + multiplier);

  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setCount(count - 10); // Reduce by 10
      setMultiplier(multiplier * 2);
    }
  };

  const buyPartyPack = () => {
    if (count >= 100) {
      setCount(count - 100); // Reduce by 100
      setMultiplier(multiplier * 5);
    }
  };

  const buyFullFeast = () => {
    if (count >= 1000) {
      setCount(count - 1000); // Reduce by 1000
      setMultiplier(multiplier * 10);
    }
  };

  return (
    <div style={{textAlign:"center"}}>
      <h1>Samosa Selector</h1>
      <h2>Count: {count}</h2>
      <img 
        className="samosa" 
        src="https://png.pngtree.com/png-vector/20230906/ourmid/pngtree-samosa-halal-food-png-image_9998990.png" 
        alt="Samosa"
        onClick={updateCount}
      />

      <div className="container">
        <div className="upgrade">
          <h3>Double Stuffed 👯‍♀️</h3>
          <p>2x per click</p>
          <button onClick={buyDoubleStuffed}>10 Samosas</button>
        </div>

        <div className="upgrade">
          <h3>Party Pack 🎉</h3>
          <p>5x per click</p>
          <button onClick={buyPartyPack}>100 Samosas</button>
        </div>

        <div className="upgrade">
          <h3>Full Feast 👩🏽‍🍳</h3>
          <p>10x per click</p>
          <button onClick={buyFullFeast}>1000 Samosas</button>
        </div>
      </div>
    </div>
  );
};

export default App;
