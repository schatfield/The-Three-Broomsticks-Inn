import React, { Component } from 'react';
import ReservationManager from '../../modules/ReservationManager'

class ReservationForm extends Component {

    state = {
        
        checkInDate: "",
        checkOutDate: "",
        persons: "",
        creatures: "",
        loadingStatus: false,

    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        console.log(evt.target.id)
        this.setState(stateToChange);
    }

    constructNewReservation = evt => {
        evt.preventDefault();
        if (this.state.checkInDate === "" || this.state.checkOutDate === "" || this.state.persons === "" || this.state.creatures === "") {
            window.alert("Please complete all provided fields so we may endeavour to fulfill your request");
        } else {
            this.setState({ loadingStatus: true });
            // const user = localStorage.getItem("credentials")
            // const userId = parseInt(user)
            const userId = JSON.parse(sessionStorage.getItem("credentials"))

            const newReservation = {
                user_Id: userId.id,
                room_Id: this.props.roomId,
                check_in_date: this.state.checkInDate,
                check_out_date: this.state.checkOutDate,
                persons: this.state.persons,
                creatures: this.state.creatures
            };
            console.log(newReservation)
            // Create the location and redirect user to location list
            ReservationManager.post(newReservation)

                .then(() => {
                    console.log(newReservation)
                    // this.props.history.push("/myaccount")
                })
        }

    };


    render() {

        return (

            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <label htmlFor="bookedRoomName"><h2>Please begin your reservation request:</h2></label>
                            <p><label htmlFor="date">Dates:</label></p>

                            <input
                                type="date"
                                required
                                onChange={this.handleFieldChange}
                                id="checkInDate"
                                placeholder="checkin-date"
                            />

                            <input
                                type="date"
                                required
                                onChange={this.handleFieldChange}
                                id="checkOutDate"
                                placeholder="checkout-date"
                            />

                            <p><label htmlFor="guests">Guests:</label></p>

                            <label htmlFor="persons">Number of persons:</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="persons"
                                placeholder="please enter a number"
                            />

                            <label htmlFor="creatures">Number of creatures:</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="creatures"
                                placeholder="please enter a number"
                            />


                        </div>
                        <div className="alignRight">
                            <button type="button" disabled={this.state.loadingStatus} onClick={this.constructNewReservation}>Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default ReservationForm;
