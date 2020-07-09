import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NotFound from './components/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
