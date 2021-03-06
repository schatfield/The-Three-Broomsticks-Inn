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
            <img className="" src={require("./sweptAway.gif")} alt="" />
            <img className="welcome" src={require("./welcome.png")} alt="" />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
