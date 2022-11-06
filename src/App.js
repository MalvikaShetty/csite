import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';
import Home from './pages/home';
import AddRes from './pages/addRes';
import DisplayRes from './pages/displayRes';
import { render } from '@testing-library/react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/addRes" element={<AddRes />}/>
        <Route path="/displayRes" element={<DisplayRes />}/>
    </Routes>
</Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
