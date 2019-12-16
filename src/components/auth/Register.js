import React, { Component } from "react"
import UserManager from "../../modules/UserManager"


class Register extends Component {

    // Set initial state
    state = {
        name: "",
        registeredEmail: "",
        registeredPassword: "",
        loadingStatus: false,
        confirmPassword: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    // the logic to handle registration. This calls functions from User manager.
    handleRegistration = (evt) => {
        evt.preventDefault()
        // if statements for validating password
        if (this.state.registerePassword === '') {
            alert("Please enter Password");
        }
        // If confirm password not entered 
        else if (this.state.confirmPassword === '') {
            alert("Please enter confirm password");
        }
        // If Not same return False.     
        else if (this.state.registeredPassword !== this.state.confirmPassword) {
            alert("Password did not match: Please try again...")
            return false;
        } else 


        // the below code searches user by email, posts new user to database if the user does not already exist
        {
            // search for user in database
            UserManager.searchUser(this.state.registeredEmail)
                .then((existingUser) => {
                    // if user does not exist, then post them to the database as a new user
                    if (existingUser.length === 0) {
                        this.setState({ loadingStatus: true })
                        const newUserObj = {
                            name: this.state.name,
                            email: this.state.registeredEmail,
                            password: this.state.registeredPassword,
                        }
                        // post user to database
                        UserManager.postNewUser(newUserObj)
                            .then(() => {
                                // get user that we just posted
                                UserManager.getUserByEmail(this.state.registeredEmail)
                                    .then(users => {
                                        users.forEach(user => {
                                            // call the set user function from ThreeBroomSticks.js to set session storage.
                                            this.props.setUser(user)
                                        });
                                        // then once the session storage is set, take the user to the home page
                                        this.props.history.push("/")
                                    })
                            })
                    } else {
                        // if the search user function come back with a user, then alert the user that they already have an account
                        window.alert("User already has an account")
                    }
                }
                )
        }
    }
   

    render() {
        return (
            <>
            <br/>
            <form onSubmit={this.handleRegistration}>
                <fieldset>
                    <h3>Register Account</h3>
                    <div className="formgrid">
                        <input onChange={this.handleFieldChange} type="text"
                        /* if you are doing an input, and you want the content that the user is putting in the input box to be saved in state, then your ID in you input box has to match the state key. See below for example.

                        State = {
                            key: name
                        } 

                        <input onChange={this.handleFieldChange} type="text"
                            id="key"
                            placeholder="Enter text"
                            required="" autoFocus="" />
                            
                        */
                            id="name"
                            placeholder="Name"
                            required="" autoFocus="" />
                        <label htmlFor="inputEmail">Name</label>

                        <input onChange={this.handleFieldChange} type="email"
                            id="registeredEmail"
                            placeholder="Email address"
                            required="" autoFocus="" />
                        <label htmlFor="inputEmail">Email</label>

                        <input onChange={this.handleFieldChange} type="password"
                            id="registeredPassword"
                            placeholder="Password"
                            required="" />
                        <label htmlFor="inputPassword">Password</label>

                        <input onChange={this.handleFieldChange} type="password"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            required="" />
                        <label htmlFor="inputPassword">Confirm Password</label>
                    </div>
                    <button type="submit">
                        Register
                    </button>
                </fieldset>
            </form>
            </>
        )
    }
}

    export default Register