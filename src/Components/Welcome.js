import React, { Component } from 'react';
import { fetchEventParticipants, fetchAllEvents } from '../api/events.js';
import Event from './Event.js'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

class Welcome extends React.Component {
  constructor() {
    super();

    this.state = {
      events: []
    }
  }

  componentDidMount() {
    fetchAllEvents()
      .then(res => res)
      .then(json => this.setState({ events: json }, () => {
        console.log(this.state.events)}));

    // fetchEventParticipants({ id: 73 })
    //   .then(res => res)
    //   .then(json => this.setState({ participants: json }, () => {
    //     console.log(this.state.participants)}));
    
   }

    render() {
      const listItems = this.state.events.map((event) =>
          <Grid item xs={4} key={event.id}>
            <Item>
              <Event event={event}>
              </Event>
            </Item>
          </Grid>
      );

      return (
          <Box sx={{ flexGrow: 1, width: '90%', margin: '0 auto 10% auto' }}>
            <h1 style={{textAlign: 'center'}}>Events</h1>
            <Grid container container direction="row" justifyContent="flex-start"
                  alignItems="baseline" columns={{ xs: 4, md: 12 }} spacing={2}>
              {listItems}
            </Grid>
          </Box>
      ); 
    }
  }

export default Welcome;

