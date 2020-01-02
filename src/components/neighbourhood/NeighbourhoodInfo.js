import React, { Component } from 'react';
import './Neighbourhood.css';

class NeighbourhoodInfo extends Component {

    render() {
        console.log("RENDERED NEIGHBOURHOOD INFO!");
        return (

            <div className="neighbourhood-flex-container">

                <div className="hogsmede-flex neighborhoud-flex-item">
                    <div className="hogsmede-title-container">
                        <img className="left-hand" src={require('./dark-leftHand.png')} alt=""></img>  
                          <h4 className="hogsmede-title"> Hogsmede </h4>
                    </div>
                    <p className="hogsmede-desc">Welcome to Hogsmede Village, the only all-wizarding village in Britain. Founded over a thousand years ago by medieval wizard Hengist of Woodcroft as he was fleeing persecution by Muggles, The village is the site of many important historical happenings in the wizarding world often serving as a wizards’ headquarters during wartime’s.</p>

                    <p className="hogsmede-desc">Hosgmede has something for everyone whatever your fancy. Whether you’re a history buff, seeking some pampering, or looking for the landscape to carve out a path to adventure , there is no shortage of local fun come  sunshine or classic highlands rain!</p>

                    <p className="hogsmede-desc">See our concierge at your leisure during your stay and we’ll make certain you find what you’re looking for. Don’t miss: We’re a short stroll from the legendary honeydukes sweet shop and the recently reopenedZonkos joke shop.  Many thanks to hogwarts alumni, George Weasley for swooping in and saving a local treasure. For the pub hoppers, there’s another local watering hole to frequent as well, the hogs head.</p>
                </div>

                <div className="margin">
                    <img className="margin-line" src={require('./margins.png')} alt=""></img>
                </div>

                <div className="hogwarts-flex neighborhoud-flex-item">
                    <div className="hogwarts-title-container">
                        <h4>Hogwarts</h4>
                        <img className="right-hand" src={require('./dark-rightHand.png')} alt=""></img>
                    </div>

                    <p className="hogwarts-desc"> Just a stone’s skim from the village of Hogsmede, Hogwarts School of Witchcraft and Wizardry is the British wizarding school located right here in the Scottish Highlands. Founded in the 10th century, It accepts magical students from Great Britain and Ireland for enrolment. The precise location of the school can never be uncovered because it was rendered Unplottable. To Muggles, the school generally looks like an old abandoned castle to protect the students and institution from any harm. however as a muggle patron of three broomsticks, the unplottable charm can be temporality lifted during private tours of the school exclusively available through your stay with us!</p>


                    <p className="hogwarts-desc"> Home to some of the most historical moments in wizarding history, 142 moving staircases, a professional grade Quidditch pitch,  extensive grounds and greenhouses, a loch called the Black Lake, as well as an insight owlery, which houses all the owls owned by the school, Hogwarts is considered to be one of the finest magical institutions in the Wizarding World.</p>


                    <p className="hogwarts-desc">Due to the high levels of magic, Muggle substitutes for magic, such as computers, radar and electricity, "go haywire" around Hogwarts. Radios, however, are an exception as they are not powered by electricity, but by magic.</p>

                </div>
            </div>


        )
    }
}

export default NeighbourhoodInfo;