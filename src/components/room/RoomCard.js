import React, { Component } from 'react';
import './Room.css'

class RoomCard extends Component {

    render() {

        return (
           
                <div className="card">
                    <div className="card-content">
                        <picture>
                        </picture>
                        <h3><span className="card-roomname">{this.props.room.name}</span></h3>
                        <p>{this.props.room.description}</p>
                        <p>{this.props.room.cost}</p>
                        <button type="button"
                            onClick={() => { this.props.history.push(`/rooms/${this.props.room.id}/book`) }}>BOOK YOUR STAY</button>
                    </div>
                </div>
            

        );
    }
}

export default RoomCard;

