import React, { Component } from 'react';
import './Gallery.css';

class GalleryCard extends Component {

    render() {

        return (
           <div className="gallery-image">
               <img className="image-card" src={require(`${this.props.image.path}`)} alt="" />

               
           </div>
        )
    }
}

export default GalleryCard;