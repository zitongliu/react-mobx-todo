import React, { Component } from 'react';
import './App.css';
import Card from './components/card/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Mobx Todo</h1>
        </header>
        <Card />
      </div>
    );
  }
}

export default App;
