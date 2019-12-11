import React, { Component } from 'react';
import { Link } from "react-router-dom"
// import './NavBar.css'


class NavBar extends Component {


    render() {

        return (
            <header>
                <h1 className="site-title">Three Broomsticks<br />
                    <small>Inn and Sumptuous Stays</small>
                </h1>
                <nav>
                    <ul className="main-nav">

                        <li><Link className="nav-link" to="/">Home</Link></li>
                        <li><Link className="nav-link" to="/rooms">Rooms</Link></li>
                        <li><Link className="nav-link" to="/pub">Pub</Link></li>
                        <li><Link className="nav-link" to="/gallery">Gallery</Link></li>
                        <li><Link className="nav-link" to="/neighborhood">Neighborhood</Link></li>
                        <li><Link className="nav-link" to="/login">"suitcase"</Link></li>
                    </ul>
                    <ul className="sub-nav">
                        <li><Link className="nav-link" to="/">Contact</Link></li>
                        <li><Link className="nav-link" to="/">"brooms"</Link></li>
                        <li><Link className="nav-link" to="/rooms">Book Now</Link></li>
                    </ul>


                </nav>
            </header>
        )
    }
}

export default NavBar;


//                        
