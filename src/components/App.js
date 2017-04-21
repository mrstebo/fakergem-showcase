import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="col-sm-6">
            <ul className="nav nav-pills nav-stacked">
              <li>
                <a href="#">Address</a>
              </li>
              <li>
                <a href="#">App</a>
              </li>
              <li>
                <a href="#">Boolean</a>
              </li>
              <li>
                <a href="#">Color</a>
              </li>
              <li>
                <a href="#">Date</a>
              </li>
              <li>
                <a href="#">Friends</a>
              </li>
              <li>
                <a href="#">Lorem Flickr</a>
              </li>
              <li>
                <a href="#">Lorem</a>
              </li>
              <li>
                <a href="#">Name</a>
              </li>
              <li>
                <a href="#">Number</a>
              </li>
              <li>
                <a href="#">Placeholdit</a>
              </li>
              <li>
                <a href="#">Rock Band</a>
              </li>
              <li>
                <a href="#">Slack Emoji</a>
              </li>
              <li>
                <a href="#">Star Wars</a>
              </li>
              <li>
                <a href="#">Superhero</a>
              </li>
              <li>
                <a href="#">Time</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
