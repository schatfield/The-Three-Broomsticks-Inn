import React, { Component } from 'react';
import './Home.css'

class Home extends Component {

  render() {

    return (
      <>
        <div id="logo">
          <img src={require('./hero-doubleLine.png')} alt="threeBroomsticks" />
        </div>
        <div className="home-flex-container">
            
              <img className="swept-away-flex-item" src={require('./sweptAway.gif')} alt="" />
            

            <div className="welcome-flex-item">
            <img className="welcome" src={require('./welcome.png')} alt="" />
            
              
              </div>

          </div>
      </>
    )
  }
}

export default Home;