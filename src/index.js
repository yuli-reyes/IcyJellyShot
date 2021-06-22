import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './pages/home/Home';
import Catalogo from './pages/catalogo/Catalogo';
import Registro from './pages/registro/Registro';
import Error404 from './pages/error404/Error404';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Router>
      <Switch>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/catalogo">
          <Catalogo />
        </Route>

        <Route path="/registro">
          <Registro />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="*">
          <Error404 />
        </Route>

      </Switch>
    </Router>


  </React.StrictMode>,
  document.getElementById('root')
);
