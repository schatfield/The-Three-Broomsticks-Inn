import React, { Component } from 'react';

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
                    <button type="button">BOOK YOUR STAY</button>
                </div>
            </div>

        );
    }
}

export default RoomCard;

