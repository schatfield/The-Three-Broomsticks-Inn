import React, { Component } from 'react';
import './Account.css'
import './AccountInfoCard.css'



class AccountInfoCard extends Component {

    render() {
        return (
            <div className="account-flex-item">
                <h2 className="account-title">Account Information<br /></h2>
                <br />
                <p><b>Name:</b> {this.props.userObj.name}</p>
                <p><b>Email:</b> {this.props.userObj.email}</p>

                <a><div className="logout-container"
                    onClick={() => this.props.clearUser(this.props.history.push('/'))}><img className="logout-btn" src={require('./logout-dark.png')} alt="" />
                </div></a>
            </div>
        )
    }
}

export default AccountInfoCard;

