import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Homepage from './pages/homepage/Homepage';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop/hats' component={HatsPage}/>
      </Switch>
    </Router>
  );
}

export default App;
