import React, { Component } from 'react';
import NavBar from './nav/NavBar';
import ApplicationViews from './ApplicationViews'
// import './ThreeBroomsticks.css'



class ThreeBroomsticks extends Component {


    state = {
        user: false,
        userId: null,
        userObj: {}
       
    }

    
    // user is set to false above to later check for a user and start with a fresh state??
    // you're setting the state of user and calling isAuthenticated to check to see if there are credentials present (this is a boolean)
    // Check if credentials are in session storage
    //returns true/false

    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    setUser = (userData) => {

        sessionStorage.setItem(
            "credentials",
            JSON.stringify(userData)
          )
          this.setState({
            user: this.isAuthenticated(),
            userObj: userData,
          });
        }



    // above you're setting the state of user and calling isAuthenticated to check if there are credentials present (this is a boolean)
    componentDidMount(){

      //1. CHECK IF AUTHENTICATED-to do this write an if statement 
      //2. If Authenticated, get credentials and call setUser
      // 3. Else do the code below
      if(this.isAuthenticated()) {
        let userObj = JSON.parse(sessionStorage.credentials);
        this.setUser(userObj)        
      } else {
        this.setState({user: this.isAuthenticated()})

      }
    }
    
      render() {
      
        return (
          
          <>
             <NavBar user={this.state.user ? 1 : 0}/>
            <ApplicationViews user={this.state.user}
                              setUser={this.setUser} 
                              userObj= {this.state.userObj}
                              
                              />



          </>
        )
      }
    }
    

    
export default ThreeBroomsticks;



