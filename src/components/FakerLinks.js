import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class FakerLinks extends Component {
  render() {
    return (
      <ul className="nav nav-pills nav-stacked">
        <li><NavLink to="/address">Address</NavLink></li>
        <li><NavLink to="/app">App</NavLink></li>
        <li><NavLink to="/boolean">Boolean</NavLink></li>
        <li><NavLink to="/color">Color</NavLink></li>
        <li><NavLink to="/date">Date</NavLink></li>
        <li><NavLink to="/friends">Friends</NavLink></li>
        <li><NavLink to="/lorem">Lorem</NavLink></li>
        <li><NavLink to="/lorem_flickr">Lorem Flickr</NavLink></li>
        <li><NavLink to="/name">Name</NavLink></li>
        <li><NavLink to="/number">Number</NavLink></li>
        <li><NavLink to="/placeholdit">Placeholdit</NavLink></li>
        <li><NavLink to="/rock_band">Rock Band</NavLink></li>
        <li><NavLink to="/slack_emoji">Slack Emoji</NavLink></li>
        <li><NavLink to="/star_wars">Star Wars</NavLink></li>
        <li><NavLink to="/superhero">Superhero</NavLink></li>
        <li><NavLink to="/time">Time</NavLink></li>
      </ul>
    );
  }
}

export default FakerLinks;
