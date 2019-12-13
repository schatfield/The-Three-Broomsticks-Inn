import React, { Component } from 'react';
import { Link } from "react-router-dom"
// import './NavBar.css'


class NavBar extends Component {


    render() {

        return (
            <header>
                <h1 className="site-title">Three Broomsticks<br />
                    <small>Resplendent Rooms & Inn</small>
                </h1>
                <nav>
                    <ul className="main-nav">

                        <li><Link className="nav-link" to="/">Home</Link></li>
                        <li><Link className="nav-link" to="/rooms">Rooms</Link></li>
                        <li><Link className="nav-link" to="/pub">Pub</Link></li>
                        <li><Link className="nav-link" to="/gallery">Gallery</Link></li>
                        <li><Link className="nav-link" to="/neighbourhood">Neighbourhood</Link></li>

                        <li>{this.props.user ?

                            <Link className="nav-link" to="/myaccount"
                                {...this.props}>"suitcase"</Link>

                        
                        :
                        <Link className="nav-link" to="/account"
                            {...this.props}>"suitcase"</Link>

                        }</li>

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


// li>{this.props.user ?
//     <Link className="nav-link" to="/myaccount"
//     onClick={() => {this.props.history.push(`/myaccount`)}}{...this.props}>"suitcase"</Link>

//   : 

//   <Link className="nav-link" to="/auth"
//   onClick={() => {this.props.history.push(`/auth`)}}{...this.props}>"suitcase"</Link>
//   }</li>                      
