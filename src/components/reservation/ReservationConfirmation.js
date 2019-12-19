import React, { Component } from 'react';

class ReservationConfirmation extends Component {

    render() {

        return (
            // JSX goes here
            <>
            <p>Your Booking Request has been received!</p>

            <button type="button"
            onClick={() => { this.props.history.push(`/myaccount`) }}>My Account</button>

            </>
        )
    }
}

export default ReservationConfirmation;