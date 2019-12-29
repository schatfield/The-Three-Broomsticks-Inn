import React, { Component } from 'react';

class ReservationCard extends Component {

    render() {
        console.log("Room Check: ", this.props)
        return (
            <div >

                <div className="card-content">
                    <picture>
                    </picture>
                    <h3><span className="card-reservation">{this.props.roomName}</span></h3>
                    <p>Check in: {this.props.reservation.checkInDate}</p>
                    <p>Check out: {this.props.reservation.checkOutDate}</p>
                    <p>Number of persons: {this.props.reservation.persons}</p>
                    <p>Number of creatures: {this.props.reservation.creatures}</p>
                    <div className="btn-flex">
                        <div type="edit-container"
                            onClick={() => { this.props.history.push(`/reservations/${this.props.reservation.id}/room/${this.props.reservation.roomId}/editBooking`) }}><img className="manage-btn" src={require('./manage-dark.png')} alt=""></img></div>
                        <div type="delete-container"
                            onClick={() => this.props.deleteReservation(this.props.reservation.id)}><img className="delete-btn" src={require('./delete-dark.png')} alt=""></img></div>

                    </div>
                </div>
            </div>

        );
    };
};

export default ReservationCard;


