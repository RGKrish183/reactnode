import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store.js';
import { Provider } from 'react-redux';
import Example from './components/examplecomponent/example'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <Example/>
      </div>
      </Provider>
    );
  }
}

export default App;
