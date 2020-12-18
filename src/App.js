import React, {useState} from 'react';
import './App.css';
import Navbar from './nav/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Works from './components/Works';
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <Navbar />
      <About />
      <Services />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;