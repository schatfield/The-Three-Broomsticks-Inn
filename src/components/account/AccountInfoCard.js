import React, { Component } from 'react';
import './Account.css'



class AccountInfoCard extends Component {

    render() {
        console.log("AccountInfo Card: ", this.props)
        return (
            <div className="account-flex-item">
                <h3 className="page-title">Account Information<br /></h3>
                
                <p>Name: {this.props.userObj.name}</p>
                <p>Email: {this.props.userObj.email}</p>
                <button type="button" onClick={() => this.props.clearUser(this.props.history.push('/'))}>Log Out</button>

            </div>


        )
    }
}

export default AccountInfoCard;

