import React, { Component } from 'react';



class AccountInfoCard extends Component {

    render() {
        console.log("AccountInfo Card: ", this.props)
        return (
            <div>
                <h3 className="page-title">My Account<br />
                    <small>Welcome to your account page. Here you can find all of your user information and manage your bookings.</small>
                </h3>


                <h4>Account Information<br />
                </h4>


                <p>Name: {this.props.userObj.name}</p>
                <p>Email: {this.props.userObj.email}</p>
                <button type="button" onClick={() => this.props.clearUser(this.props.history.push('/'))}>Log Out</button>

            </div>


        )
    }
}

export default AccountInfoCard;

