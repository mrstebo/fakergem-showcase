import React, { Component } from 'react';
import FakerLinks from './FakerLinks';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="ui grid">
        <div className="four wide column">
          <FakerLinks />
        </div>
        <div className="twelve wide stretched column">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
