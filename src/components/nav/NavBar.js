import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <header>
        {/* <h1 className="site-title">Three Broomsticks<br />
                    <small>Resplendent Rooms & Inn</small>
                </h1> */}
        <nav>
          <div id="sticky">
            <ul className="main-nav">
              <li>
                <Link className="nav-link" to="/">
                  HOME
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/rooms">
                  ROOMS
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/pub">
                  PUBLIC HOUSE
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/gallery">
                  GALLERY
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/neighbourhood">
                  NEIGHBOURHOOD
                </Link>
              </li>

              <li>
                {this.props.user ? (
                  <Link className="nav-link" to="/myaccount" {...this.props}>
                    <i className="fas fa-suitcase"></i>
                  </Link>
                ) : (
                  <Link className="nav-link" to="/accountauth" {...this.props}>
                    <i className="fas fa-suitcase"></i>
                  </Link>
                )}
              </li>
            </ul>

            <div className="border-nav">
              <img
                className="border"
                src={require("./navBorder3.png")}
                alt=""
              />
            </div>

            <div className="sub-nav">
              <Link className="contact" to="/">
                CONTACT
              </Link>
              <Link className="sub-link" to="/">
                {" "}
                <img
                  className="broom-nav"
                  src={require("./broom-small.png")}
                  alt="home"
                />
              </Link>
              <Link className="sub-link" to="/rooms">
                <img
                  className="book-nav"
                  src={require("./book.png")}
                  alt="book now"
                />
              </Link>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default NavBar;

// img className="suitcase" src={require('./suitcase.svg')} alt="My Account" />
