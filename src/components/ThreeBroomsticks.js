import React, { Component } from 'react';
import RoomCard from './room/RoomCard'
// import NavBar from './nav/NavBar';
// import ApplicationViews from './ApplicationViews'
// import './ThreeBroomsticks.css'



class ThreeBroomsticks extends Component {

    render() {

        return (
            

            <div>
                <div>
                    <h2>Three Broomsticks<br />
                        <small>Inn & Sumptuous Stays</small>
                    </h2>
                    <address>
                        Visit us in The Village of Hogsmede
            <br />42 1/2 Broomstick Way
          </address>
                </div>
                <div>
                    <RoomCard />
                    <RoomCard />
                    <RoomCard />
                </div>

            </div>


        );
    }
}

export default ThreeBroomsticks;


