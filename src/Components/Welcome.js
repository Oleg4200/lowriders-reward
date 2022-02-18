import React, { Component } from 'react';
import { fetchEventParticipants } from '../api/events.js';

class Welcome extends React.Component {
  componentDidMount() {
    fetchEventParticipants({ id: 73 })
      .then(res => res)
      .then(json => this.setState({ participants: json }, () => {
        console.log(this.state.participants)}));
    
   }

    render() {
      console.log(this.state)
      // return <h1> {this.state.participants}</h1>;
      return <h1> ddd</h1>;
    }
  }
export default Welcome;

