import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';

function App() {

  const [response, setResponse] = useState("");

  useEffect(() => {
    fetch("http://localhost:3500").then((res) => res.text()).then((res) => {
      setResponse(res);
    }).catch((err) => {
      setResponse("fetch failed");
    })
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {response}
      </header>
    </div>
  );
}

export default App;
