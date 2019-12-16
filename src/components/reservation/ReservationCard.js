import React, { Component } from 'react';

class ReservationCard extends Component {

    render() {
        console.log("Room Check: ", this.props)
        return (
            <div className="card">

                <div className="card-content">
                    <picture>
                    </picture>
                    {/* <h3><span className="card-reservation">{this.props.rooms.name}</span></h3> */}
                    <p>Check in: {this.props.reservation.check_in_date}</p>
                    <p>Check out: {this.props.reservation.check_out_date}</p>
                    <p>Number of persons: {this.props.reservation.persons}</p>
                    <p>Number of creatures: {this.props.reservation.creatures}</p>
                    <button type="button"
            onClick={() => { this.props.history.push(`/reservations/${this.props.reservation.id}/editBooking`) }}>Modify my booking</button>
          <button type="button"
            onClick={() => this.props.deleteReservation(this.props.reservation.id)}>Delete this booking</button>

                </div>
            </div>

        );
    };
};

export default ReservationCard;


