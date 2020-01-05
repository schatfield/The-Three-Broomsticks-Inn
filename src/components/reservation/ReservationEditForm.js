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
            userId: Number(userId.id),
            roomId: Number(this.props.match.params.roomId),
            id: Number(this.props.match.params.reservationId),
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
        services.forEach(service => {
            const newRezService = {
                // resservationId from data / reservationId argument passed into constructNewServices
                reservationId: Number(reservationId),
                serviceId: Number(service.id),
                isSelected: service.isSelected,
                id: Number(service.rezServiceId)
            }
            
            // TODO: Make put call for editing reservation services
            ReservationManager.updateReservationService(newRezService);

        })

    }

    componentDidMount() {
        const reservationId = this.props.match.params.reservationId

        ReservationManager.get(reservationId)
            .then(booking => {
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
                    reservationService.service.rezServiceId = reservationService.id;
                    // ADD rezService ID onto service object, similar to line above
                    return reservationService.service
                })
                console.log(newArray)
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

                        <img className="booking-border" src={require('./bookingFormBorder.png')} alt="" />

                        <div className="edit-formgrid">
                            <center>
                                <label htmlFor="bookedRoomName"><h2 className="edit-rez-form">Modify My Booking:</h2></label></center>
                            <center><p>Please make desired changes to your booking and we will contact you directly with confirmation of your request.</p></center>
                            <p className="edit-form-label"><label htmlFor="date">Dates:</label></p>


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
                            <p className="edit-form-label"><label htmlFor="guests">Guests:</label></p>

                            <p className="number"> <label htmlFor="persons">Number of persons</label></p>

                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="people"
                                value={this.state.people || ""}
                            /><br />

                            <p className="number"> <label htmlFor="persons">Number of creatures</label></p>

                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="nonPerson"
                                value={this.state.nonPerson || ""}
                            />
                            <p className="edit-form-label"><label htmlFor="services">Services & Treatments:</label></p>

                            <div className="services"> {this.state.rezServices.map((service, index) =>
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
                        </div>
                        <div className="alignRight">
                           <a> <div
                                type="button" disabled={this.state.loadingStatus}
                                onClick={this.updateExistingReservation}
                                className="btn btn-primary"
                            ><img className="modify-btn" src={require('./modify.png')} alt=""></img></div></a>
                        </div>
                    </fieldset>
                </form>
            </>
        )

    }
}

export default ReservationEditForm;

  
