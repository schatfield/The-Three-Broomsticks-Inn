import React, { Component } from 'react';
import ReservationList from './reservation/ReservationList';
import ReservationEditForm from './reservation/ReservationEditForm';
import Auth from './auth/Auth';
import AccountInfo from './account/AccountInfo';


class Account extends Component {

    render() {

        return (
            <>
            
            <ReservationList />
            <ReservationEditForm />
            <AccountInfo />
            <Auth />

            </>

            
        )
    }
}

export default Account;