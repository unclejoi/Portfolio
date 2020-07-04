import React from 'react';
import './App.css';
import { Header } from './Components/Header';
import { Main } from './Components/MainComponent';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
