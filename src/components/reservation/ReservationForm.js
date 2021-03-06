import React, { Component } from 'react';
import ReservationManager from '../../modules/ReservationManager'
import RoomManager from '../../modules/RoomManager';
import './ReservationForm.css';

class ReservationForm extends Component {

    state = {

        checkInDate: "",
        checkOutDate: "",
        persons: "",
        creatures: "",
        loadingStatus: false,
        roomName: "",
        roomDescription: "",
        roomCost: "",
        services: []

    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    }

    handleCheckbox = (evt, index) => {
        const services = this.state.services;
        // if service.isSelected is crruently TRUE
        const isSelected = services[index].isSelected;
        services[index].isSelected = !isSelected;
        this.setState({ services: services })
    }

    componentDidMount() {
        RoomManager.get(this.props.roomId)
            .then(room => {
                this.setState({
                    roomName: room.name,
                    roomDescription: room.description,
                    roomCost: room.cost

                })

            })
        ReservationManager.getServices()
            .then(services => {
                services.forEach(service => service.isSelected = false);
                // TODO: CHECKBOX COMMENT
                this.setState({
                    services: services
                })
            })
    };


    constructNewReservation = evt => {
        evt.preventDefault();
        if (this.state.checkInDate === "" || this.state.checkOutDate === "" || this.state.persons === "" || this.state.creatures === "") {
            window.alert("Please complete all provided fields so we may endeavour to fulfill your request");
        } else {
            this.setState({ loadingStatus: true });
            // const user = localStorage.getItem("credentials")
            // const userId = parseInt(userId.id)
            const userId = JSON.parse(sessionStorage.getItem("credentials"))

            const newReservation = {
                userId: Number(userId.id),
                roomId: Number(this.props.roomId),
                checkInDate: this.state.checkInDate,
                checkOutDate: this.state.checkOutDate,
                persons: this.state.persons,
                creatures: this.state.creatures
            };
            // Create the location and redirect user to location list
            ReservationManager.post(newReservation)
                .then((confirmedReservation) => {
                    this.props.history.push(`/reservations/${confirmedReservation.id}/confirmation`)
                    this.constructNewServices(confirmedReservation.id)

                })
        }

    };

    constructNewServices = (reservationId) => {
        // changing state of services again- the services in your state above. "services" here is storing a copy of services in state.
        const services = this.state.services;
        services.forEach(service => {
            const newRezService = {
                // resservationId from data / reservationId argument passed into constructNewServices
                reservationId: Number(reservationId),
                serviceId: Number(service.id),
                isSelected: service.isSelected
            }
            ReservationManager.postNewReservationService(newRezService);

        })

    };



    render() {

        return (

            <>
                <form className="booking-form">


                    <fieldset>
                        <img className="booking-border" src={require('./bookingFormBorder.png')} alt="" />

                        <div className="rez-formgrid">

                            <center><label htmlFor="bookedRoomName"><h2 className="rez-form">Please begin your reservation request for:</h2>
                              <p className="room-name">'{this.state.roomName}'</p></label></center>
                            <p className="form-label"><label htmlFor="date">Dates:</label></p>

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

                            <p className="form-label"><label htmlFor="guests">Guests:</label></p>

                            <p className="number"> <label htmlFor="persons">Number of persons </label>
                            </p>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="persons"
                                placeholder="please enter a number"
                            /><br />

                            <p className="number"> <label htmlFor="creatures">Number of creatures  </label></p>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="creatures"
                                placeholder="please enter a number"
                            />

                            <p className="form-label"><label htmlFor="services">Services & Treatments:</label></p>

                            <div className="services"> {this.state.services.map((service, index) =>
                                <label key={service.id}>
                                    <input className="checkmark" type="checkbox"
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
                            <a><div type="button" disabled={this.state.loadingStatus} onClick={this.constructNewReservation}><img className="confirm-btn" src={require('./confirm.png')} alt=""></img></div></a>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default ReservationForm;
