import React, { useState } from 'react';
import './App.css';
import RandomVideo from './RandomVideo';

function Home() {
  return (
    <section className="App-section">
      <h2>Welcome to the Home Page!</h2>
      <p>This is the home page of my website.</p>
    </section>
  );
}

function Projects() {
  return (
    <section className="App-section">
      <h2>Check Out My Projects!</h2>
      <ul>
        <li><a href="https://github.com/lmaoleonix/python-hwid">HWID Printer/Checker</a></li>
      </ul>
    </section>
  );
}

function App() {
  const [route, setRoute] = useState('home');

  const handleRouteChange = (newRoute) => {
    setRoute(newRoute);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lmaoleonix's Website.</h1>
        <nav>
          <ul>
            <li>
              <button className={route === 'home' ? 'active' : ''} onClick={() => handleRouteChange('home')}>
                Home
              </button>
            </li>
            <li>
              <button className={route === 'projects' ? 'active' : ''} onClick={() => handleRouteChange('projects')}>
                Projects
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main className="App-main">
        {route === 'home' && <Home />}
        {route === 'projects' && <Projects />}
      </main>
      <div className="App-video">
        <RandomVideo />
      </div>
      <footer>
        <p>&copy; 2023 LMAOLEONIX. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
