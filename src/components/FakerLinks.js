import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class FakerLinks extends Component {
  render() {
    return (
      <div className="ui vertical fluid tabular menu">
        <NavLink to="/address" className="item" activeClassName="active">Address</NavLink>
        <NavLink to="/app" className="item" activeClassName="active">App</NavLink>
        <NavLink to="/boolean" className="item" activeClassName="active">Boolean</NavLink>
        <NavLink to="/color" className="item" activeClassName="active">Color</NavLink>
        <NavLink to="/date" className="item" activeClassName="active">Date</NavLink>
        <NavLink to="/friends" className="item" activeClassName="active">Friends</NavLink>
        <NavLink to="/lorem" className="item" activeClassName="active">Lorem</NavLink>
        <NavLink to="/lorem_flickr" className="item" activeClassName="active">Lorem Flickr</NavLink>
        <NavLink to="/name" className="item" activeClassName="active">Name</NavLink>
        <NavLink to="/number" className="item" activeClassName="active">Number</NavLink>
        <NavLink to="/placeholdit" className="item" activeClassName="active">Placeholdit</NavLink>
        <NavLink to="/rock_band" className="item" activeClassName="active">Rock Band</NavLink>
        <NavLink to="/slack_emoji" className="item" activeClassName="active">Slack Emoji</NavLink>
        <NavLink to="/star_wars" className="item" activeClassName="active">Star Wars</NavLink>
        <NavLink to="/superhero" className="item" activeClassName="active">Superhero</NavLink>
        <NavLink to="/time" className="item" activeClassName="active">Time</NavLink>
      </div>
    );
  }
}

export default FakerLinks;
