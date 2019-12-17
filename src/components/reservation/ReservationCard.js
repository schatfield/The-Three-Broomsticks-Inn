import React, { Component } from 'react';

class ReservationCard extends Component {

    render() {
        console.log("Room Check: ", this.props)
        return (
            <div className="card">

                <div className="card-content">
                    <picture>
                    </picture>
                    <h3><span className="card-reservation">{this.props.roomName}</span></h3>
                    <p>Check in: {this.props.reservation.checkInDate}</p>
                    <p>Check out: {this.props.reservation.checkOutDate}</p>
                    <p>Number of persons: {this.props.reservation.persons}</p>
                    <p>Number of creatures: {this.props.reservation.creatures}</p>
                    <button type="button"
            onClick={() => { this.props.history.push(`/reservations/${this.props.reservation.id}/room/${this.props.reservation.roomId}/editBooking`) }}>Modify my booking</button>
          <button type="button"
            onClick={() => this.props.deleteReservation(this.props.reservation.id)}>Delete this booking</button>

                </div>
            </div>

        );
    };
};

export default ReservationCard;


