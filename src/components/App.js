import React, { Component } from 'react';
import FakerLinks from './FakerLinks';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="col-sm-6">
            <FakerLinks />
          </div>
          <div className="col-sm-6">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
