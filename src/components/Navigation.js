import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import './styles/Navigation.css';
import {FaUserCircle } from 'react-icons/fa';

class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <div className="container">
                        <NavLink className="navbar-brand" to="/home">
                            Bid With Us
                        </NavLink>
                        <div>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/home">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <div className="nav-link dropdown-toggle" >
                                        Auction
                                    </div>
                                    <div className="dropdown-menu">
                                        <NavLink className="nav-link drop-item" style={{ paddingLeft:'10px' }} to="/auction">Auction</NavLink>
                                        <NavLink className="nav-link drop-item" style={{ paddingLeft:'20px' }} to="/selling"> Selling</NavLink>
                                        <NavLink className="nav-link drop-item" style={{ paddingLeft:'20px' }} to="/bidding"> Bidding</NavLink>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">
                                        About Us
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">
                                        Contact Us
                                    </NavLink>
                                </li>
                               
                                <li className="nav-item dropdown">
                                    <div className="nav-link dropdown-toggle" >
                                        <FaUserCircle style={{fontSize: '2vw'}} />
                                    </div>
                                    <div className="dropdown-menu">
                                        <NavLink className="nav-link drop-item" to="/auction">Profile</NavLink>
                                        <NavLink className="nav-link drop-item" to="/bidding"> My Activity</NavLink>
                                        <NavLink className="nav-link drop-item" to="/selling">Log out</NavLink>
                                    </div>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navigation
