import React from 'react';

export function Notifications() {
    return(
        <div className="notification">
            <div className="notifications-content">
               <p className="flex">
                    <img src={require("../images/avatar-mark-webber.jpg")} className="" alt="image of mark webber"/>
                    <span className="ml-5">
                         Mark Webber reacted to your recent post My first tournament today!
                         <br />
                         1m ago
                    </span>
               </p> 
               <p className="flex">
                    <img src={require("../images/avatar-angela-gray.jpg")} className="w-50px h-50px" alt="image of angela gray"/>
                    <span className="ml-5">
                         Angela Gray followed you
                         <br />
                         5m ago
                    </span>
               </p>
               <p className="flex">
                    <img src={require("../images/avatar-jacob-thompson.jpg")} className="" alt="image of jacob thompson"/>
                    <span className="ml-5">
                         Jacob Thompson has joined your group Chess Club
                         <br />
                         1 day ago
                    </span>
               </p>
               <p className="flex">
                    <img src={require("../images/avatar-rizky-hasanuddin.jpg")} className="image of rizky hansanuddin"/>
                    <span className="ml-5">
                         Rizky Hasanuddin sent you a private message
                         <br />
                         5 days ago
                    </span>
               </p>
               <p>
                    Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
                    <br />
                    I'm already having lots of fun and improving my game.
               </p>
               <p className="flex">
                    <img src={require("../images/avatar-kimberly-smith.jpg")} className="" alt="image of kimberly smith"/>
                    <span className="ml-5">
                         Kimberly Smith commented on your picture
                         <br />
                         1 week ago
                    </span>
               </p>
               <p className="flex">
                    <img src={require("../images/avatar-nathan-peterson.jpg")} className="" alt="image of nathan peterson"/>
                    <span className="ml-5">
                         Nathan Peterson reacted to your recent post 5 end-game strategies to increase your win rate
                         <br />
                         2 weeks ago
                    </span>
               </p>
               <p className="flex">
                   <img src={require("../images/avatar-anna-kim.jpg")} className="" alt="image of anna kim"/>
                    <span className="ml-5">
                         Anna Kim left the group Chess Club
                         <br />
                         2 weeks ago
                    </span>
               </p>
            </div>
        </div>
    );
}

export default Notifications;