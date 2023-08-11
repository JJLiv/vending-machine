import './App.css';
import React from "react";

import VendingMachine from './VendingMachine';
import Chips from "./Chips";
import Cookies from "./Cookies";
import Soda from "./Soda";
import NavBar from './NavBar';

import { BrowserRouter, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">      
      <BrowserRouter>
        <NavBar />
          <Route exact path='/'>
            <VendingMachine />
          </Route>
          <Route exact path="/Soda">
            <Soda />
          </Route>
          <Route exact path="/Chips">
            <Chips />
          </Route>
          <Route exact path="/Cookies">
            <Cookies />
          </Route>        
      </BrowserRouter>      
    </div>
  );
}

export default App;
