import React, { Component } from 'react';
import UserManager from '../../modules/UserManager';

class Auth extends Component {
    // Set initial state of user name, email, and password
    state = {
        name: "",
        email: "",
        password: "",
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    // here is where you are handling login with the handle login function below. you are then using your UserManager get call to access your users data to get a user by their email. IF: you are checking to see if the state of the email the user has just entered matches anything in your data (existingUser). If the email doesn't match anything the "length" of the array that is returned is 0, also the email has zero characters in your data because it doesn't exist. ELSE IF: if the email does exist you have an existing user and are now checking that the existing user's (returned in the zeroth position of the returned array) password that they just entered in it's current state matches what you have in your data. if all this checks out the setUser function, which was passed to the Auth route in application views through props, will now execute and login in the user as well as push the user to the home page route ("/")

    handleLogin = (evt) => {
        evt.preventDefault()

        UserManager.getUserByEmail(this.state.email)
            .then((existingUser) => {
                if (existingUser.length === [0]) {
                    alert("There is no account associated with this user")
                } else if (existingUser[0].password === this.state.password) {                    
                        this.props.setUser(existingUser[0])
                        this.props.history.push("/")
                    } else {
                        alert("This Password Is Incorrect, Please Try Again.")
    
                    }
                })
        }

    render() {

        return (
            <form onSubmit={this.handleLogin}>
                <fieldset>
                    <h3>Please sign in</h3>
                    <div className="formgrid">
                        <input onChange={this.handleFieldChange} type="email"
                            id="email"
                            placeholder="Email address"
                            required="" autoFocus="" />
                        <label htmlFor="inputEmail">Email address</label>

                        <input onChange={this.handleFieldChange} type="password"
                            id="password"
                            placeholder="Password"
                            required="" />
                        <label htmlFor="inputPassword">Password</label>
                    </div>
                    <button type="submit">
                        Sign in
            </button>
                </fieldset>
            </form>
        )
    }
}

export default Auth;

