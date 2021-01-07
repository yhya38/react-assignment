import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from './Login';
import Home from './Home';

  
function App() {
  
 

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login
            />
          </Route>
          <Route path='/home'>
            <Home  />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
