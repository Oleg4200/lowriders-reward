import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import { useParams, useNavigate } from "react-router-dom";

export default function Event({ to, ...props }) {
      let navigate = useNavigate();
      let params = useParams();
      
      
      return (
      	<div>
		    <div>
		      ID: {props.event.id}
	        </div>
	        <div>
		      Pair: {props.event.currencyPair.symbol}
	        </div>
	        <div>
		      Status: {props.event.status}
	        </div>
	        <div>
	          Bets closes: {new Date(Date.parse(props.event.betsCloseTime)).toLocaleString("en-US")}
	        </div>
	        <div>
		      Duration: {props.event.measurePeriod / 3600} h
	        </div>
	        <div>
		      Num. of Bets: {props.event.bets.length}
	        </div>
	        <div>
		      Total Bets Amount: {props.event.totalBetsAmount}
	        </div>
	        <div>
		      Total Liquidity Provided: {props.event.totalLiquidityProvided}
	        </div>
	        <div>
		      Total Value Locked: {props.event.totalValueLocked}
	        </div>
	        <div>
		      Pool Below: {props.event.poolBelow}
	        </div>
	        <div>
		      Pool Above/Equal: {props.event.poolAboveEq}
	        </div>
	        <button
	          onClick={() => {
	            navigate(`/events/${props.event.id}`);
	          }}
	          >
	          Details
	        </button>
        </div>
      ); 
};



