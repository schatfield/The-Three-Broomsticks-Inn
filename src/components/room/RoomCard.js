import React, { Component } from 'react';

class RoomCard extends Component {

    render() {

        return (

            <div className="card">
                <div className="card-content">
                    <picture>
                    </picture>
                    <h3><span className="card-roomname">The Smethwyck Snuggery</span></h3>
                    <p>25 Galleons per night</p>
                </div>
            </div>

        );
    }
}

export default RoomCard;


