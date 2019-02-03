import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store.js';
import { Provider } from 'react-redux';
import indexRoutes from './routes/index.jsx';
import {  Route, Switch } from 'react-router-dom';
import { HashRouter } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div >
      <HashRouter>
  
  <Switch>
    {indexRoutes.map((prop, key) => {
      return <Route path={prop.path} key={key} component={prop.component} />;
    })}
  </Switch>

</HashRouter>
      </div>
      </Provider>
    );
  }
}

export default App;
