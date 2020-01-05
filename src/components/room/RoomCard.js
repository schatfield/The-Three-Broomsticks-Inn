import React, { Component } from 'react';
import './Room.css'

class RoomCard extends Component {


    render() {
        return (
            <div className="cards">
                <div className="card" id="room-card">
                    <h6>ROOMS AT THREE BROOMSTICKS</h6>
                    <hr></hr>
                    <h3><span className="card-roomname">{this.props.room.name}</span></h3>
                    <hr></hr>
                    <img className="card-image" src={require(`${this.props.imagePath}`)} alt="" />
                    <div className="card-content">

                        <p className="room-desc">{this.props.room.description}</p>
                        <hr></hr>
                        <div className= "cost"><img className="galleon" src={require('./galleon-icon.png')} alt="" /> {this.props.room.cost} / night</div>
                        <a><div type="book-button-container" className="btn btn-secondary btn-lg btn-block"
                            onClick={() => { this.props.history.push(`/rooms/${this.props.room.id}/book`) }}><img className="book-btn" src={require('./book-tan.png')} alt="" /> </div></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default RoomCard;




