import React, { Component } from 'react';

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
    stateToChange = {
        id: value
    }
    this.setState({id: value})
  }

  handleLogin = (evt) => {
    evt.preventDefault()
    /*
        For now, just store the email and password that
        the customer enters into local storage.
    */
    localStorage.setItem(
        "credentials",
        JSON.stringify({
            email: this.state.email,
            password: this.state.password
        })
    )
    this.props.history.push("/rooms");

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

