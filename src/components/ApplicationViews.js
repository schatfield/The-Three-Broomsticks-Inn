import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './home/Home';
import RoomList from './room/RoomList';
import PubInfo from './pub/PubInfo';
import GalleryList from './gallery/GalleryList';
import NeighborhoodInfo from './neighborhood/NeighborhoodInfo';
import Auth from './auth/Auth';



    class ApplicationViews extends Component {


        render() {
            return (
                <>
                    <Route exact path="/" render={(props) => {
                        return <Home />
                    }} />
                    <Route path="/rooms" render={(props) => {
                        return <RoomList />
                    }} />


                    <Route path="/pub" render={(props) => {
                        return <PubInfo />

                    }} />

                    <Route path="/gallery" render={(props)=> {
                        return <GalleryList />

                    }} />

                    <Route path="/neighborhood" render={(props) => {
                        return <NeighborhoodInfo />

                    }} />


                    <Route path="/myaccount" render={(props) => {
                        return <Auth />
                    }} />

                    

                    

                    






                    








                </>
            )
        }
    }

export default ApplicationViews;