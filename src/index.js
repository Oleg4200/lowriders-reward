import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from './Components/Welcome.js';
import EventDetails from './Components/EventDetails.js';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route index element={<Welcome />} />
        <Route path="events" element={<Welcome />}/>
        <Route path="events/:eventId" element={<EventDetails />} />
        <Route
          path="*"
          element={
             <main style={{ padding: "1rem" }}>
               <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
