import React, { Component } from 'react'
import ReservationManager from '../../modules/ReservationManager'
import ReservationCard from '../animal/ReservationCard'

class ReservationsWithUser extends Component {
    state = {
      user: {},
      reservations: []
    }

    componentDidMount(){
        //got here, now make call to get reservations with user
        ReservationManager.getWithUser(this.props.match.params.userId)
            .then((APIResult) => {
              console.log("API RESULT", APIResult.user)
            this.setState({
              user: APIResult,
              reservations: APIResult.reservations,
            })
        })
    }

    render(){
        return (
          <div className="card">
            {this.state.reservations.map(reservation =>
              <ReservationCard
                key={reservation.id}
                reservation={reservation}
                {...this.props}
              />
            )}
          </div>
        )
      }
    }

export default ReservationsWithUser;