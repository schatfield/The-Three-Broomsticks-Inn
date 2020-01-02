import React, { Component } from 'react';
import ReservationCard from './ReservationCard';
import ReservationManager from '../../modules/ReservationManager';

class ReservationList extends Component {

    // define what component this needs to render

    state = {
        reservations: [],
        
    }

     componentDidMount() {    
         let userInfo = this.props.getUser()
         console.log("userInfo", userInfo)
        ReservationManager.getReservationByUserId(userInfo.id)
        .then((reservations) => {
            console.log(reservations)
            
            this.setState({
                reservations : reservations

            })
        })

    };


    deleteReservation = id => {
        let userInfo = this.props.getUser()
        ReservationManager.delete(id)
        .then(() => {
          ReservationManager.getReservationByUserId(userInfo.id)
          .then((reservations) => {
            this.setState({
                reservations: reservations
            })
          })
        })
      };
    

    render() {
        console.log("Reservation List: Render", this.state)

        return (
            <div >
                {this.state.reservations.map(reservation =>
                <ReservationCard 
                    key={reservation.id}
                    reservation={reservation}
                    deleteReservation={this.deleteReservation}
                    roomName={reservation.room.name}

                    {...this.props} 
                    />

                    
                    )}
            </div>
        );
    };
};

export default ReservationList;