import React from 'react';
import Header from './header';
import Footer from './footer';
import Home from './home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
