import React, { Component } from 'react';
import GalleryCard from './GalleryCard'
import GalleryManager from '../../modules/GalleryManager';
import './Gallery.css';

class GalleryList extends Component {

    state = {
        images: []
    }
    // component did mount means- hey, when this page loads, execute the stuff in this function first, then set that stuff to state. in the setState method below you are passing in an object- in this case the gallery images object. the "images" on the left is the property from state, the "images" on the right is your gallery images data- the whole array of gallery images.

    componentDidMount() {
        GalleryManager.getAll()
            .then((images) => {
                this.setState({
                    images: images
                })

            })
    }

    render() {
        
        return (
            <div className="gallery-page">
                    <center><h1 className="gallery-page-title">Gallery</h1></center>
                    <center><p className="gallery-page-message">Take a gander around the Three Broomsticks and see what we have to offer. Wander down our halls, stroll through our gardens, and have a peek at things nearby... </p></center> 
            <div className="gallery-container">
                {this.state.images.map(image =>
                    <GalleryCard
                        key={image.id}
                        image={image}
                        {...this.props}
                    />)}
            </div>
            </div>
            
        )
    }
}

export default GalleryList;