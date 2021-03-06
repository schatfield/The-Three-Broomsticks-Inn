import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <>
        <div id="hero">
          <img className="hero-image" src={require("./hero-doubleLine.png")} alt="threeBroomsticks" />
        </div>
        <div className="home-flex-container">
          <div className="welcome-flex-container">
            <img className="welcome-flex-item" src={require("./sweptAway.gif")} alt="" />
            <p className="welcome-message welcome-flex-item">
              Welcome to the Three Broomsticks Inn. Tucked away in the historic village of Hogsmede, our little establishment dates back to the 14th century making it a landmark in it's own right. <br /> 
              <br />
              Having had a great deal of time to build up some character, you'll be hard put to avoid getting caught up in our colorful spirit the moment you cross our threshold, and we hope that you will! Our recent expansion brings a unique set of rooms as an extension of what we've always done here- evolved rather than redesigned, you'll be met with a mixture of rustic refinery and home-like charm. We've left no stone unturned in including all the creature comforts of home in painstakingly detail but made sure to leave out any of the usual clearing up so you won't need to lift a finger.<br />        
              <br />
              Truly a public house with rooms, our pub is at the heart of what we do. We are  fervently committed to our community, bringing our love of good food, good drink and good conversation to anyone who walks through our doors. Speaking of good conversation, while you’re here be sure to have a chat with the locals. Some of our regulars go back with us further than they may like to admit. Cosy up by a fire, lend them an ear and they’ll soon be telling tales of when we were just one broomstick...<br />
              <br />
              If it all feels a bit like magic, well that’s because it is. Go on, give us whirl and let us sweep you away.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
