import React, { Component } from 'react';
import ReservationCard from './reservations/ReservationCard';
import ReservationManager from '../../modules/ReservationManager';

class ReservationList extends Component {

    // define what component this needs to render

    state = {
        reservations: [],
    }

    componentDidMount() {
        console.log("reservation list: componentDidMount")
        // getAll from RerservationManager and hang on to that data; put it in state
        ReservationManager.getAll()
        .then((reservations) => {
            this.setState({
                reservations : reservations
            })
        })
    };

        
    

    render() {
        console.log("Reservation List: Render")

        return (
            <div className="container-cards">
                {this.state.reservations.map(reservation =>
                <ReservationCard 
                    key={reservation.id}
                    reservations={reservation}
                    // {...this.props} 
                    />

                    
                    )}
            </div>
        );
    };
};

export default ReservationList;