import React, { Component } from 'react';
import GalleryCard from './GalleryCard'
import GalleryManager from '../../modules/GalleryManager';

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
        console.log("Render Gallery List")

        return (
            <div className="container-cards">
                {this.state.images.map(image =>
                    <GalleryCard
                        // key={image.id}
                        // images={images}
                        // {...this.props}
                    />)}
            </div>
        )
    }
}

export default GalleryList;

console.log("Room List: RENDER")


