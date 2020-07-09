import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Menu from './components/Menu'
import NotFound from './components/NotFound'
import Form from './components/Form'
import Datos from './components/Datos'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/menu" component={Menu}/>
        <Route path="/form/:hasText/:hasDate/:hasNumber" component={Form}/>
        <Route path="/data/:text/:date/:number" component={Datos}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
