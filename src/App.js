import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';
import Home from './pages/home';
import ResOptions from './pages/resOptions.jsx';
import AddFoodRes from './pages/addFoodRes';
import DisplayFoodRes from './pages/displayFoodRes';
import DisplayFirstAidRes from './pages/displayFirstAidRes';
import Map from './pages/map';
import { render } from '@testing-library/react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Home />}/>
        {/* <Route path="/:veri" element={<Home />}/> */}
        <Route path="/resoptions/:password" element={<ResOptions />}/>
        <Route path="/addfoodres" element={<AddFoodRes />}/>
        <Route path="/displayfoodres/:password" element={<DisplayFoodRes />}/>
        <Route path="/displayFirstAidRes/:password" element={<DisplayFirstAidRes />}/>
        <Route path="/map" element={<Map />}/>
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
