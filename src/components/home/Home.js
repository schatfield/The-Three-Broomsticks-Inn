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
            

            <p className="welcome-flex-item">Welcome to the Three Broomsticks. 
            
            Our unique set of rooms have been We've left no stone unturned in including all the creature comforts of home but made certain to leave out any of the clearing up. If you're feeling peckish in the wee hours, don't hesitate to raid the well-stocked larder you'll find in your room. We've made sure to stock you up on locally-sourced snackboxes and in-house treats made by our superb kitchen staff that won't be found anywhere else.twee.</p>

          </div>
      </>
    )
  }
}

export default Home;