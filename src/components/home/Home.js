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
            

            <p className="welcome-flex-item">Welcome to the Three Broomsticks.Lorem ipsum dolor amet occupy mumblecore pitchfork PBR&B wayfarers everyday carry. Keytar +1 hot chicken flannel direct trade raw denim truffaut tacos drinking vinegar. Tumblr lo-fi mlkshk ramps, disrupt keytar subway tile direct trade jianbing poutine banjo ethical. Pitchfork waistcoat pug glossier YOLO, live-edge microdosing messenger bag twee.</p>

          </div>
      </>
    )
  }
}

export default Home;