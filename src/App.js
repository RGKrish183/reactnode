import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store.js';
import { Provider } from 'react-redux';
import indexRoutes from './routes/index.jsx';
import { create } from "jss";
import {  Route, Switch } from 'react-router-dom';
import { HashRouter,BrowserRouter } from 'react-router-dom'
import JssProvider from "react-jss/lib/JssProvider";
import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";

const styleNode = document.createComment("insertion-point-jss");
document.head.insertBefore(styleNode, document.head.firstChild);

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  insertionPoint: "insertion-point-jss"
});


class App extends Component {
  render() {
    return (
<JssProvider jss={jss} generateClassName={generateClassName}>

      <Provider store={store}>
      <div >
        
      <BrowserRouter>
  
  <Switch>
    {indexRoutes.map((prop, key) => {
      return <Route path={prop.path} key={key} component={prop.component} />;
    })}
  </Switch>

</BrowserRouter>
      </div>
      </Provider>

</JssProvider>
    );
  }
}

export default App;



