import React from 'react';

export function Notifications() {
    return(
        <div className="notification">
            <div className="notifications-content">
               <p>
                    <img src="../images/avatar-mark-webber.jpg" />
                    Mark Webber reacted to your recent post My first tournament today! 
                    <br />
                    1m ago
               </p> 
               <p>
                    <img src="../images/avatar-angela-gray.jpg" />
                    Angela Gray followed you
                    <br />
                    5m ago
               </p>
               <p>
                    <img src="../images/avatar-jacob-thompson.jpg" />
                    Jacob Thompson has joined your group Chess Club
                    <br />
                    1 day ago
               </p>
               <p>
                    <img src="../images/avatar-rizky-hasanuddin.jpg" />
                    Rizky Hasanuddin sent you a private message
                    <br />
                    5 days ago
               </p>
               <p>
                    Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
                    <br />
                    I'm already having lots of fun and improving my game.
               </p>
               <p>
                    <img src="../images/avatar-kimberly-smith.jpg" />
                    Kimberly Smith commented on your picture
                    <br />
                    1 week ago
               </p>
               <p>
                    <img src="../images/avatar-nathan-peterson.jpg" />
                    Nathan Peterson reacted to your recent post 5 end-game strategies to increase your win rate
                    <br />
                    2 weeks ago
               </p>
               <p>
                   <img src="../images/avatar-anna-kim.jpg" />
                    Anna Kim left the group Chess Club
                    <br />
                    2 weeks ago
               </p>
            </div>
        </div>
    );
}

export default Notifications;