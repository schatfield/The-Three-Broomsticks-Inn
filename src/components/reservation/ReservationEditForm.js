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
        rezServices: []

    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleCheckbox = (evt, index) => {
        const services = this.state.rezServices;
        // if service.isSelected is crruently TRUE
        const isSelected = services[index].isSelected;
        services[index].isSelected = !isSelected;
        this.setState({ rezServices: services })
    }
    
    updateExistingReservation = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const userId = JSON.parse(sessionStorage.getItem("credentials"))

        const editedReservation = {
            userId: userId.id,
            roomId: Number(this.props.match.params.roomId),
            id: this.props.match.params.reservationId,
            checkInDate: this.state.checkIn,
            checkOutDate: this.state.checkOut,
            persons: this.state.people,
            creatures: this.state.nonPerson

        };

        ReservationManager.update(editedReservation)
            .then(() => this.props.history.push("/myaccount"))
        // TODO: Call constructNewServices
        this.constructNewServices(editedReservation.id)
    }

    constructNewServices = (reservationId) => {
        // changing state of services again- the services in your state above. "services" here is storing a copy of services in state.
        const services = this.state.rezServices;
        services.map(service => {
            const newRezService = {
                // resservationId from data / reservationId argument passed into constructNewServices
                reservationId: reservationId,
                serviceId: service.id,
                isSelected: service.isSelected
            }
            // TODO: Make put call for editing reservation services
            ReservationManager.editReservationService(newRezService);
            
        })

    }

    componentDidMount() {
        console.log("RES EDIT FORM MOUNTED")
        const reservationId = this.props.match.params.reservationId

        ReservationManager.get(reservationId)
            .then(booking => {
                console.log("BOOKING: ", booking)
                this.setState({
                    checkIn: booking.checkInDate,
                    checkOut: booking.checkOutDate,
                    people: booking.persons,
                    nonPerson: booking.creatures,
                    loadingStatus: false,
                });
            });

        ReservationManager.getServicesByReservationId(reservationId)
            .then(reservationServices => {
                const newArray = reservationServices.map((reservationService) => {
                    reservationService.service.isSelected = reservationService.isSelected;
                    // ADD rezService ID onto service object, similar to line above
                    return reservationService.service
                })
                this.setState({
                    rezServices: newArray

                })
            })

    };


    render() {

        return (

            <>
                <form className="res-edit-form">
                    <fieldset>
                        <div className="edit-formgrid">
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
                            <p><label htmlFor="services">Services & Treatments:</label></p>

                            {this.state.rezServices.map((service, index) =>
                                <label key={service.id}>
                                    <input type="checkbox"
                                        checked={service.isSelected}
                                        onChange={(evt) => this.handleCheckbox(evt, index)}
                                        id={service.id}
                                    />
                                    <span className="service-name">{service.name}</span> - <img className="galleon" src={require('../room/galleon-icon.png')} alt="" /> {service.cost}
                                    <br />
                                    <br />
                                    <span className="service-desc">{service.description}</span>
                                    <br />

                                    <br />
                                </label>
                            )}

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

