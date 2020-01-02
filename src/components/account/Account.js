import React, { Component } from 'react';
import ReservationList from '../reservation/ReservationList';
import AccountInfoCard from './AccountInfoCard';
import './Account.css'


class Account extends Component {

    render() {

        return (
            <>
                <div className="account-info">
                    <h2>Welcome to your account page</h2>
                    <p>Here you can find all of your user information and manage your bookings.</p>
                    <br />
                    <div className="account-flex">
                        <AccountInfoCard
                            userObj={this.props.userObj}
                            {...this.props}
                        />
                        <div className="margin">
                            <img className="margin-line" src={require('../neighbourhood/margins.png')} alt=""></img>
                        </div>
                        <ReservationList
                            userObj={this.props.userObj}
                            getUser={this.props.getUser}
                            {...this.props} />
                    </div>
                </div>
            </>


        )
    }
}

export default Account;

// you do not need a key when passing the userObj props down (starts at ThreeBroomsticks) becasue we aren't mapping or looping through anything. we aren't looping through several user objects because we only need to see one ussr at a time in the my account page.