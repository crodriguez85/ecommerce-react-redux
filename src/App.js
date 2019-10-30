import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/shop';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </Router>
  );
}

export default App;
