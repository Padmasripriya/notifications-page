import React from 'react';

export function Notifications() {
    return(
        <div className="notification">
            <div className="notifications-content">
               <p>
                    Mark Webber reacted to your recent post My first tournament today! 
                    <br />
                    1m ago
               </p> 
               <p>
                    Angela Gray followed you
                    <br />
                    5m ago
               </p>
               <p>
                    Jacob Thompson has joined your group Chess Club
                    <br />
                    1 day ago
               </p>
               <p>
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
                    Kimberly Smith commented on your picture
                    <br />
                    1 week ago
               </p>
               <p>
                    Nathan Peterson reacted to your recent post 5 end-game strategies to increase your win rate
                    <br />
                    2 weeks ago
               </p>
               <p>
                    Anna Kim left the group Chess Club
                    <br />
                    2 weeks ago
               </p>
            </div>
        </div>
    );
}

export default Notifications;