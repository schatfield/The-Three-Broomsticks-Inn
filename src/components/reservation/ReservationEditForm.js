import React, { Component } from 'react';
import ReservationManager from '../../modules/ReservationManager'
import './ReservationEditForm.css'

class ReservationEditForm extends Component {

    //set the initial state
    state = {

        checkIn: "",
        checkOut: "",
        people: "",
        nonPerson: "",
        loadingStatus: true,

    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        console.log(evt.target.id)
        this.setState(stateToChange)
    }

    updateExistingReservation = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const userId = JSON.parse(sessionStorage.getItem("credentials"))

        const editedReservation = {
            userId: userId.id,
            roomId: Number (this.props.match.params.roomId),
            id: this.props.match.params.reservationId,
            checkInDate: this.state.checkIn,
            checkOutDate: this.state.checkOut,
            persons: this.state.people,
            creatures: this.state.nonPerson

        };

        ReservationManager.update(editedReservation)
            .then(() => this.props.history.push("/myaccount"))
    }

    componentDidMount() {
        ReservationManager.get(this.props.match.params.reservationId)
            .then(booking => {
                this.setState({
                    checkIn: booking.checkInDate,
                    checkOut: booking.checkOutDate,
                    people: booking.persons,
                    nonPerson: booking.creatures,
                    loadingStatus: false,
                });
            });
    }


    render() {

        return (

            <>
                <form className="res-edit-form">
                    <fieldset>
                        <div className="formgrid">
                            <label htmlFor="bookedRoomName"><h2>Modify Your Booking:</h2></label>
                            <p><label htmlFor="date">Dates:</label></p>


                            <input
                                type="date"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="checkIn"
                                value={this.state.checkIn || ""}
                            />


                            <input
                                type="date"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="checkOut"
                                value={this.state.checkOut || ""}
                            />
                            <p><label htmlFor="guests">Guests:</label></p>

                            <label htmlFor="persons">Number of persons:</label>

                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="people"
                                value={this.state.people || ""}
                            />
                        
                         <label htmlFor="persons">Number of creatures:</label>

                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="nonPerson"
                                value={this.state.nonPerson || ""}
                            />


                        </div>
                        <div className="alignRight">
                            <button
                                type="button" disabled={this.state.loadingStatus}
                                onClick={this.updateExistingReservation}
                                className="btn btn-primary"
                            >Confirm</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )

    }
}

export default ReservationEditForm;

