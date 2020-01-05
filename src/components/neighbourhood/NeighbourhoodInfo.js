import React, { Component } from 'react';
import './Neighbourhood.css';

class NeighbourhoodInfo extends Component {

    render() {
        return (

            <div className="neighbourhood-flex-container">

                <div className="neighborhoud-flex-item">
                    <div className="hogsmede-title-container">
                        <img className="left-hand" src={require('./dark-leftHand.png')} alt=""></img>
                        <h4 className="hogsmede-title"> Hogsmede </h4>
                    </div>
                    <img className="village" src={require('./village.jpeg')} alt=""></img>
                    <div className="hogsmede-desc">
                        <p>Welcome to Hogsmede Village, the only all-wizarding village in Britain. Founded over a thousand years ago by medieval wizard Hengist of Woodcroft. The village became a safe haven thereafter for many wizards fleeing from muggle persecution and is the site of many important historical happenings in the Wizarding World.</p>

                        <p>Hosgmede has something for everyone whatever your fancy. Whether you’re a history buff, seeking some pampering, or looking for the landscape to carve out a path to adventure, there is no shortage of local fun come  sunshine or classic highlands rain!</p>

                        <p>See our concierge during your stay and we’ll make certain you find what you’re looking for. </p>

                        <p>Don’t miss: We’re a short stroll from the legendary Honeydukes, a sweets shop, and the recently reopened Zonkos Joke Shop.  Many thanks to Hogwarts alumni, George Weasley for swooping in and saving a local treasure. For the pub hoppers, drop in to The Hogs Head, another local watering hole just a short walk away.</p>
                    </div>

                    <div className="getting-here-hogsmede">
                        <div className="hogsmede-title-container">
                            <img className="left-hand" src={require('./green-leftHand.png')} alt=""></img>
                            <h4 className="getting-here-hogsmede-title">Getting Here</h4>

                        </div>

                        <p className="getting-here-desc">

                            As a registered muggle you may now arrive via platform 9 3/4 at Kings Cross station. If you plan to arrive by muggle motor car, take please send us an owl ahead of your arrival and we will arrange for an invisibility booster to be set up in your vehicle prior to your visit. We are, At the heart of hogsmede , a true wizarding community and In an effort to preserve our unspoiled way of life, all motor cars must remain invisible for the duration of your stay. </p>


                    </div>

                </div>

                <div className="margin">
                    <img className="margin-line" src={require('./margins.png')} alt=""></img>
                </div>

                <div className="neighborhoud-flex-item">
                    <div className="hogwarts-title-container">
                        <h4>Hogwarts</h4>
                        <img className="right-hand" src={require('./dark-rightHand.png')} alt=""></img>
                    </div>

                    <img className="hogwarts-img" src={require('./hogwarts.jpeg')} alt=""></img>

                    <div className="hogwarts-desc">
                        <p> Just a stone’s skim from the village of Hogsmede, Hogwarts School of Witchcraft and Wizardry is a school of magic located right here in the Scottish Highlands. Founded in the 10th century, it accepts magical students from Great Britain and Ireland. The precise location of the school can never be uncovered because it was rendered Unplottable.</p>
                            
                        <p>To Muggles, the school generally looks like an old abandoned castle to protect the students and institution from any harm. As of tbis year, the Unplottable Charm can be temporality lifted during private tours of the school exclusively available through your stay with us!</p>

                        <p> Home to some of the most historical moments in Wizarding history, Hogwarts is considered to be one of the finest magical institutions in the Wizarding World.</p>

                        <p>Don't miss: Tour the school to see centuries' old architecture, 142 moving staircases, the Headmaster's office, and send a postcard home via an onsight owlery housing all the owls owned by the school. The extensive grounds of the school are home to many gardens, a professional grade Quidditch pitch, the Black Lake, and the entrance to The Forbidden Forest, an enchanted wood full of magical creatures.  </p>
                    </div>
                    <div className="getting-there-hogwarts">
                        <div className="hogwarts-title-container">
                            <h4 className="getting-there-hogwarts-title">Getting There</h4>
                            <img className="right-hand" src={require('./green-rightHand.png')} alt=""></img>
                        </div>
                        <p className="getting-there-desc">

                            Hogwarts school can be easily accessed by footpath from Hogsmede Village. For those with mobility issues, we can arrange transfer to and from the school via the Hogwarts carriages.  As a muggle patron of Three Broomsticks, please note that  we offer an exclusive Wizarding experience tour of hogwarts school and grounds which can be purchased online during your reservation request or at the booking office we have on site following your arrival.  </p>
                    </div>
                </div>
            </div>


        )
    }
}

export default NeighbourhoodInfo;