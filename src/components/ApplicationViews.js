
import { Route } from "react-router-dom";
import React, { Component } from 'react';
import Home from './home/Home';
import RoomList from './room/RoomList';
import PubInfo from './pub/PubInfo';
import GalleryList from './gallery/GalleryList';
import NeighbourhoodInfo from './neighborhood/NeighborhoodInfo';
import Auth from './auth/Auth';
import Register from './auth/Register';
import ReservationForm from './reservation/ReservationForm';
import ReservationEditForm from './reservation/ReservationEditForm';
import Account from './account/Account';



class ApplicationViews extends Component {


    render() {
        return (
            <>
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />


                <Route exact path="/rooms" render={(props) => {
                    return <RoomList {...props} />
                }} />

                <Route path="/rooms/:roomId(\d+)/book" render={props => {
                    if (this.props.user) {
                        return <ReservationForm roomId={parseInt(props.match.params.roomId)}{...props} />

                    } else {
                        return <Auth roomId={parseInt(props.match.params.roomId)} setUser={this.props.setUser} {...props} />
                    }
                }} />


                <Route path="/reservations/:reservationId(\d+)/editBooking" render={props => {
                    return <ReservationEditForm {...props} />
                }} />

                {/* <Route path="/rooms/:roomId(\d+)/book" render={props => {
                    return <ReservationForm roomId={parseInt(props.match.params.roomId)}{...props} />
                }}
                /> */}


                <Route path="/pub" render={(props) => {
                    return <PubInfo />

                }} />

                <Route path="/gallery" render={(props) => {
                    return <GalleryList />

                }} />

                <Route path="/neighbourhood" render={(props) => {
                    return <NeighbourhoodInfo />

                }} />


                <Route path="/accountauth" render={(props) => {
                    return <Auth setUser={this.props.setUser} {...props} />
                }} />

                <Route
                    path="/accountauth" render={props => {
                        return <Register setUser={this.props.setUser} {...props}{...this.props} />
                    }}
                />

                <Route path="/myaccount" render={(props) => {
                    return <Account userObj={this.props.userObj} clearUser={this.props.clearUser}{...props} />
                }} />





            </>
        )
    }
}

export default ApplicationViews;