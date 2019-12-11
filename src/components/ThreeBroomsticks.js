import React, { Component } from 'react';
import NavBar from './nav/NavBar';
import ApplicationViews from './ApplicationViews'
// import './ThreeBroomsticks.css'



class ThreeBroomsticks extends Component {

    render() {

        return (
            
            <>
            <NavBar />
            <ApplicationViews />
            </>
            

        );
    }
}

export default ThreeBroomsticks;



