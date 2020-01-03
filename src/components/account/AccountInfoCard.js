import React, { Component } from 'react';
import './Account.css'



class AccountInfoCard extends Component {

    render() {
        return (
            <div className="account-flex-item">
                <h3 className="page-title">Account Information<br /></h3>

                <p>Name: {this.props.userObj.name}</p>
                <p>Email: {this.props.userObj.email}</p>

                <a><div className="logout-container"
                    onClick={() => this.props.clearUser(this.props.history.push('/'))}><img className="logout-btn" src={require('./logout-dark.png')} alt="" />
                </div></a>
            </div>


        )
    }
}

export default AccountInfoCard;

