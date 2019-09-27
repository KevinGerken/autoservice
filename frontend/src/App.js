import React from 'react';
import Orders from './components/Orders';
import Order from './components/Order';
import CreateOrder from './components/CreateOrder';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Orders} />
        <Route path='/orders/:id' component={Order} />
        <Route path='/CreateOrder' component={CreateOrder} />
      </Router>
    </div>
  );
}

export default App;
