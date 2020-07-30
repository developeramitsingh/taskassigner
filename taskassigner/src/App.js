import React from 'react';
import './App.css';

import Navigation from './components/Navigation';
import Taskpane from './components/Taskpane';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
        <Navigation/>
        <Taskpane/>
        <Footer/>
    </div>
  );
}

export default App;
