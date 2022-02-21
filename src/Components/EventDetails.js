import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import {Outlet, Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";


export default function EventDetails () {

      let { eventId } = useParams(); 	
      return (
      	<div>
		    <div>
		      ID: {eventId}
	        </div>
        </div>
      ); 
}
