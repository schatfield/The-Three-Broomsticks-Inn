import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"
import './NavBar.css'


class NavBar extends Component {

    handleLogout = () => {
        console.log("handlelog out")
        this.props.clearUser();
        this.props.history.push('/');
      }

    render() {

        return (
            <header>
        <h1 className="site-title">Three Broomsticks<br />
          <small>Inn and Luxury Stays</small>
        </h1>
        <nav>
          <ul className="container">
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/locations">Rooms</Link></li>
            {(this.props.user) ?
              <>
                <li><Link className="nav-link" to="/animals">Animals</Link></li>
                <li><Link className="nav-link" to="/employees">Employees</Link></li>
                <li><Link className="nav-link" to="/owners">Owners</Link></li>
                <li><span className="nav-link" onClick={this.handleLogout}>Logout</span></li>
              </>
              :
              <li><Link className="nav-link" to="/login">login</Link></li>
            }
          </ul>
        </nav>
      </header>
        )
    }
}

export default NavBar;


            