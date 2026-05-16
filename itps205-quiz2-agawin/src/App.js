
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const handleIncrease = () => setCount(prevCount => prevCount + 1);
  const handleDecrease = () => setCount(prevCount => Math.max(prevCount - 1, 0));
  const handleReset = () => setCount(0);

  return (
    <div className="app-wrapper">
      <div className="card">
        <h1>Agawin's Interactive Counter</h1>

        <div className="counter-display">
          <span>Current Value</span>
          <strong>{count}</strong>
        </div>

        <div className="button-group">
          <button className="btn btn-primary" onClick={handleIncrease}>
            Increase
          </button>
          <button className="btn btn-secondary" onClick={handleDecrease} disabled={count === 0}>
            Decrease
          </button>
          <button className="btn btn-reset" onClick={handleReset}>
            Reset
          </button>
        </div>

        {count >= 5 && <p className="goal-text">Goal Reached!</p>}

        <div className="input-section">
          <label htmlFor="customMessage">Custom Message</label>
          <input
            id="customMessage"
            type="text"
            value={message}
            onChange={event => setMessage(event.target.value)}
            placeholder="Type your message..."
          />
          <p className="live-message">{message || 'Your message will appear here.'}</p>
        </div>
      </div>

      <footer>
        <p>FINALS HANDS-ON QUIZ #2: REACT INTERACTIVE COUNTER & MESSAGE APP</p>
        <p>&copy; 2026 Joshua Ezekiel Agawin. All rights reserved.</p>
        <p>BSIT-2C</p>
      </footer>
    </div>
  );
}

export default App;
