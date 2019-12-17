import React, { Component } from 'react';
import ReservationList from '../reservation/ReservationList';
import AccountInfoCard from './AccountInfoCard';


class Account extends Component {

    render() {

        return (
            <>

                <AccountInfoCard
                    userObj={this.props.userObj} 
                    {...this.props}
                   />
                    
                <ReservationList 
                 userObj={this.props.userObj} 
                 getUser={this.props.getUser}
                {...this.props}/>

            </>


        )
    }
}

export default Account;

// you do not need a key when passing the userObj props down (starts at ThreeBroomsticks) becasue we aren't mapping or looping through anything. we aren't looping through several user objects because we only need to see one ussr at a time in the my account page.