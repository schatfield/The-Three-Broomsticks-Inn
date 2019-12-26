import React, { Component } from 'react';


import './Room.css'

class RoomCard extends Component {

    render() {
        console.log("Room Card: ", this.props)
        return (


            <div className="card" id="room-card">
                <h6>ROOMS AT THREE BROOMSTICKS</h6>
                <hr></hr>
                <h3><span className="card-roomname">{this.props.room.name}</span></h3>
                <hr></hr>
                <img className="card-image" src={require(`${this.props.imagePath}`)} alt="" />
                <div className="card-content">

                    <p>{this.props.room.description}</p>
                    <hr></hr>
                    <p><img className="galleon" src={require('./galleon-icon.png')} alt=""/> {this.props.room.cost} / night</p>
                    <button type="button" className="btn btn-secondary btn-lg btn-block"
                        onClick={() => { this.props.history.push(`/rooms/${this.props.room.id}/book`) }}>BOOK YOUR STAY</button>
                </div>
            </div>





        );
    }
}

export default RoomCard;




