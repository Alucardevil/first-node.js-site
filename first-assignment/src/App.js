import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <label>
              What is your name?
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </label>
            <button type="submit">Press Me!</button>
          </form>
        ) : (
          <div>
            <p>Hello, I am React.</p>
            <p>Did you know? React was initially released in March 2013.</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
