import React, { Component } from 'react';
import { fetchEventParticipants } from '../api/events.js';

class Welcome extends React.Component {
  componentDidMount() {
    fetchEventParticipants({ id: 22 })
      .then(res => res.json())
      .then(json => this.setState({ participants: json }));
    
   }
    render() {
      return <h1> {this.state.participants}</h1>;
    }
  }
export default Welcome;

