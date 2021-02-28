import React, { Component } from "react";
import RoomCard from "./RoomCard";
import RoomManager from "../../modules/RoomManager";

class RoomList extends Component {
  // define what this component needs to render

  state = {
    rooms: [],
  };

  componentDidMount() {
    // getAll from RoomManager and hang on to that data; put it in state
    RoomManager.getAll().then((rooms) => {
      debugger;
      this.setState({
        rooms: rooms,
      });
    });
  }

  render() {
    return (
      <>
        <div className="rooms-page">
          <center>
            <h1 className="rooms-page">Our Rooms</h1>
          </center>
          <center>
            <p className="rooms-page-message">
              Each room at the Three Broomsticks has been thoughtfully furnished
              to create a feeling of restful refinery. Choose your favourite and
              start relaxing in one clean sweep...{" "}
            </p>
          </center>

          <div className="container-cards">
            {this.state.rooms.map((room) => (
              <RoomCard
                key={room.id}
                room={room}
                imagePath={room.roomImages[0].path}
                {...this.props}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default RoomList;
