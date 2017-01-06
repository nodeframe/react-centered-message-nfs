import React, { Component } from 'react';
import './App.css';
import CenteredMessage from './CenteredMessage/index';

class App extends Component {
  render() {
    return (
      <div className="heightFix">
        <CenteredMessage>test</CenteredMessage>
      </div>
    );
  }
}

export default App;
