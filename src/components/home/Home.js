import React, { Component } from 'react';
import './Home.css'

class Home extends Component {

  render() {

    return (
      <>
        <div id="logo">
          <img src={require('./hero-doubleLine.png')} alt="threeBroomsticks" />
        </div>
      </>
    )
  }
}

export default Home;