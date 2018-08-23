import React, { Component } from 'react';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import './App.css';
import AppRouter from './Router';
import history from '../src/history';

class App extends Component {
  
  render() {
    return (
      <div>

        <AppRouter history={history}/>

      </div>
    );
  }
}

export default App;
