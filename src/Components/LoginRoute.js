import React from 'react';
import { BrowserRouter as Router, Route,  Switch } from "react-router-dom";
import Login from './Login';
import Home from './Home';
import Cart from './Cart';
  
function LoginRoute() {
  
  return (
      <Router>     
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path='/home' component={Home} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
  );
}

export default LoginRoute;
