import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

// Páginas
import Home from './pages/home';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}