import React, { Component } from 'react';
import RoomCard from './RoomCard';
import RoomManager from '../../modules/RoomManager';

class RoomList extends Component {

    // define what this component needs to render

    state = {
        rooms: [],
    }

    componentDidMount() {
        console.log("Room List: ComponentDidMount");
        // getAll from RoomManager and hang on to that data; put it in state
        RoomManager.getAll()
            .then((rooms) => {
                console.log("Rooms", rooms);
                this.setState({
                    rooms: rooms
                })
            })
    }

    render() {
        console.log("Room List: RENDER")


        return (
            <div className="container-cards">
                {this.state.rooms.map(room =>
                    <RoomCard
                        key={room.id}
                        room={room}
                        //imagePath={room.roomImages.path}
                        {...this.props} />

                )}

            </div>

        );
    };
};


export default RoomList;

