import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {Home, About} from './components/pages'
// import {About} from './components/pages/About'

ReactDOM.render(
  <React.StrictMode>

    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer />
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
