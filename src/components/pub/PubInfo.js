import React, { Component } from 'react';
import'./Pub.css';

class PubInfo extends Component {

    render() {



        return (
            <div className="pub-page">
                    <center><div className="pub-page-title">Public House</div></center>
                    <center><p className="pub-page-message">This is where it all started. At the heart of what we do here is our pub and it still is. This is a place where everything is driven directly by our surroundings to provide a place for our village to come together for good food, good drink, and good conversation. Our food offerings are an extension of our community. It's all home-grown and local for simple offerings that are simply good. The menus will change depending on what we forage on any given day, but here's and idea of the kind of thing we do.

                    <div className="menu-img">
     <img className="menu" src={require('./menu.png')} alt="" />

     <div className="spirits"> 
     <center><div className="spirits-title">Spirited Spirits</div></center>
     <center><p className="pub-page-message">
         We proudly serve a wide range of fine beverages as well. Explore our carefully selected tonics including ButterBeer, Dragon Barrel Brandy, Sherry, Gigglewater, Elderflower wines, and of course, being located in Scottish Highlands you'll be spoiled for choice in the Firewhisky department. While you're here be sure to ask our Barmen and Barmaids about seasonal offerings, house made cocktails, and locally Elf made wines.
         </p></center>
     
     </div>
 </div>
 </p></center> </div>
 
        )
    }
}

export default PubInfo;