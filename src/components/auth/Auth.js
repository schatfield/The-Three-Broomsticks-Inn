import React, { Component } from 'react';
import UserManager from '../../modules/UserManager';

class Auth extends Component {
    // Set initial state
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

    handleLogin = (e) => {
        e.preventDefault()

        UserManager.getUserByEmail(this.state.email)
            .then((existingUser) => {
                if (existingUser.length === 0) {
                    alert("There is no account associated with this user")
                } else if (existingUser[0].password === this.state.password) {
                    
                        this.props.setUser(existingUser[0])
                        this.props.history.push("/")
                    } else {
                        alert("This Password Is Incorrect, Please Try Again.")
    
                    }
                })
        }

//    this.props.setUser({
//     email: this.state.email,
//     password: this.state.password
//    })
//     this.props.history.push("/");
// this.props.history.push redirects to home page after a user logs in (chapter 10 practice exercise)
//   executes when submit button is clicked


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

