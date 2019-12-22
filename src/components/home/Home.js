import React, { Component } from 'react';
import './Home.css'

class Home extends Component {

  render() {

    return (
      <>
        <div id="logo">
          <img src={require('./hero-doubleLine.png')} alt="threeBroomsticks" />
        </div>
        <div className="home-container">
          <div className="swept-away">
            <img src={require('./sweptAway.png')} alt="" />
            <div className="welcome">
            <h4>Welcome to the Three Broomsticks.</h4>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Home;