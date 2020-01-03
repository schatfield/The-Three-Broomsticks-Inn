import React, { Component } from 'react';
import ReservationManager from '../../modules/ReservationManager';
import './ReservationCard.css'


class ReservationCard extends Component {

    state = {
        rezServices: [],
        imagePath: ""
    }

    componentDidMount() {
        const reservationId = this.props.reservation.id
        ReservationManager.getSelectedServicesByReservationId(reservationId)
            .then(reservationServices => {
                //  .then(reservationServices) reservationServices is your data

                this.setState({
                    rezServices: reservationServices
                })

            })
        ReservationManager.getRoomImageByRoomId(this.props.reservation.roomId)
            .then(roomImage => {

                this.setState({
                    imagePath: roomImage[0].path
                })
            })


    };

    render() {
        return (
            <div className="rez-card-container">

                <div className="card-content">
                    <h3 className="rez-card-title">Upcoming Visit</h3>
                    <div className="rez-image-container">
                        {this.state.imagePath ?
                            <img className="rez-card-image" src={require(`${this.state.imagePath}`)} alt="" />
                            : <div></div>
                        }
                    </div>

                    <h3><span className="rez-room-name">{this.props.roomName}</span></h3>
                    <p>Check in: {this.props.reservation.checkInDate}</p>
                    <p>Check out: {this.props.reservation.checkOutDate}</p>
                    <p>Number of persons: {this.props.reservation.persons}</p>
                    <p>Number of creatures: {this.props.reservation.creatures}</p>

                    {this.state.rezServices.length ?
                        <p>Services & Treatments: </p> :
                        <p></p>}

                    {this.state.rezServices.map(rezService =>
                        <div key={rezService.id}>
                            <p> {rezService.service.name}</p>
                        </div>

                    )}
                    <div className="btn-flex">
                        <a><div type="edit-container"
                            onClick={() => { this.props.history.push(`/reservations/${this.props.reservation.id}/room/${this.props.reservation.roomId}/editBooking`) }}><img className="manage-btn" src={require('./manage-dark.png')} alt=""></img></div></a>
                        <a><div type="delete-container"
                            onClick={() => this.props.deleteReservation(this.props.reservation.id)}><img className="delete-btn" src={require('./delete-dark.png')} alt=""></img></div></a>

                    </div>
                </div>
            </div>

        );
    };
};

export default ReservationCard;


