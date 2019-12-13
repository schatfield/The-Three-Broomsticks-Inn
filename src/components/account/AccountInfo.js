import React, { Component } from 'react';
import ReservationList from './reservation/ReservationList';


class AccountInfo extends Component {

    render() {

        return (
           <div>
                <h1 className="page-title">My Account<br />
                    <small>Welcome to your account page. Here you can find all of your user information and manage your bookings.</small>
                </h1>
               
                
                 <h2>Account Information<br />
                 </h2>
                
                 <small>
                    Name:
                     <br />
                 </small>
                 <small>
                    Email:
                     <br />
                 </small>
             </div>


            //  <ReservationCard
            //  user= {user} />
            
        )
    }
}

export default AccountInfo;