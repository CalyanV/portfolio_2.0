import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from '../components/common/Header'; // Adjust the path if necessary

function Home() {
  return (
    <div className="App">
      <Header /> {/* Add the Header component */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/home.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
