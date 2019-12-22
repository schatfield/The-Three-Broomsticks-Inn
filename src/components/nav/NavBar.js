import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './NavBar.css'


class NavBar extends Component {


    render() {

        return (
            <header>
                {/* <h1 className="site-title">Three Broomsticks<br />
                    <small>Resplendent Rooms & Inn</small>
                </h1> */}
                <nav >
                    <ul id="sticky">
                        <ul className="main-nav">

                            <li><Link className="nav-link" to="/">HOME</Link></li>
                            <li><Link className="nav-link" to="/rooms">ROOMS</Link></li>
                            <li><Link className="nav-link" to="/pub">PUBLIC HOUSE</Link></li>
                            <li><Link className="nav-link" to="/gallery">GALLERY</Link></li>
                            <li><Link className="nav-link" to="/neighbourhood">NEIGHBOURHOOD</Link></li>


                            <li>{this.props.user ?

                                <Link className="nav-link" to="/myaccount"
                                    {...this.props}>"suitcase"</Link>


                                :
                                <Link className="nav-link" to="/accountauth"
                                    {...this.props}>"suitcase"</Link>

                            }

                            </li>
                        </ul>

                        <ul className="border-nav">

                            <img className="border" src={require('./navBorder3.png')} alt="" />

                        </ul>

                        <ul className="sub-nav">

                            <li><Link className="sub-link" to="/">CONTACT</Link></li>
                            <li><Link className="sub-link" to="/"> <img className="broom-nav" src={require('./broom-small.png')} alt="home" />
                            </Link></li>
                            <li><Link className="sub-link" to="/rooms"><img className="book-nav" src={require('./book.png')} alt="book now" /></Link></li>

                        </ul>

                    </ul>
                </nav>
            </header>
        )
    }
}

export default NavBar;

