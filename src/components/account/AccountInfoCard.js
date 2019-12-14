import React, { Component } from 'react';



class AccountInfoCard extends Component {

    render() {
        console.log("AccountInfo Car: ",this.props)
        return (
           <div>
                <h1 className="page-title">My Account<br />
                    <small>Welcome to your account page. Here you can find all of your user information and manage your bookings.</small>
                </h1>
               
                
                 <h2>Account Information<br />
                 </h2>
                
                 <small> 
                   <p>Name:</p>{this.props.userObj.name}
                     <br />
                 </small>
                 <small>
                    Email:{this.props.userObj.email}
                     <br />
                 </small>
             </div>

            
        )
    }
}

export default AccountInfoCard;