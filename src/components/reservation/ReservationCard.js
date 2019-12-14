import React, { Component } from 'react';

class ReservationCard extends Component {

    render() {
        console.log("Room CHeck: ", this.props)
        return (
            <div className="card">

                <div className="card-content">
                    <picture>
                    </picture>
                    {/* <h3><span className="card-reservation">{this.props.reservation.room_Id}</span></h3> */}
                    <p>{this.props.reservation.check_in_date}</p>
                    <p>{this.props.reservation.check_out_date}</p>
                    <p>{this.props.reservation.persons}</p>
                    <p>{this.props.reservation.creatures}</p>
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


