import React, { Component } from 'react';
import logo from './logo.svg';
import { HashRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="aaa">
        {this.props.children}
      </div>
    );
  }
}

export default App;
