import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';

function App() {

  const [response, setResponse] = useState("");

  useEffect(() => {
    console.log(location.hostname);
    console.log(location.port);
    console.log(location.host);
    fetch("http://localhost:3500/api").then((res) => res.json()).then((res) => {
      console.log(res);
      setResponse(res.msg);
    }).catch((err) => {
      console.log(err);
      setResponse("Error");
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
