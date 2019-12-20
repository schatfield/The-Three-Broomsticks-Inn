import React, { Component } from 'react';
import './ReservationConfirmation.css'

class ReservationConfirmation extends Component {

    render() {

        return (
            <>
                <div id="confirmed" className="confirmed" onClick={() => { this.props.history.push(`/myaccount`) }}>
                    <img src={require('./confirmedBooking.png')} title="Click to go to your account!"alt="You're all set!" />

                    {/* <button type="button" className="my-account-btn"
                        onClick={() => { this.props.history.push(`/myaccount`) }}>My Account</button> */}
                </div>
            </>
        )
    }
}

export default ReservationConfirmation;