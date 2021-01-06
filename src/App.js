import React from 'react';
import './App.css';
import Index from './pages/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Index} exact />
      </Switch>
    </Router>
  )
}

export default App;
