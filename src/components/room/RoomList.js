import React, { Component } from 'react';
import RoomCard from './RoomCard';
import RoomManager from '../../modules/RoomManager';

class RoomList extends Component {

    // define what this component needs to render

    state = {
        rooms: [],
    }

    componentDidMount() {
        // getAll from RoomManager and hang on to that data; put it in state
        RoomManager.getAll()
            .then((rooms) => {
                this.setState({
                    rooms: rooms
                })
            })
    }

    render() {
        return (

            <>
                <div className="rooms-heading">
                    <center><p className="rooms-heading">Our Rooms</p></center>

                    <div className="container-cards">
                        {this.state.rooms.map(room =>

                            <RoomCard
                                key={room.id}
                                room={room}
                                imagePath={room.roomImages[0].path}
                                {...this.props} />

                        )}
                    </div>
                </div>
            </>

        )
    };
};


export default RoomList;

