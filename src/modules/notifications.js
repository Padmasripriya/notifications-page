import React from 'react';
import { useState } from 'react';

export function Notifications() {
     const [count, setCount] = useState(3);
     const [isBackgroundNone, setIsBackgroundNone] = useState(true);

     function handleClick() {
          setCount(0);
          setIsBackgroundNone(!isBackgroundNone);
     }

    return(
     <>
          <div className="notifications-count flex gap-5 justify-between">
               <p className="font-bold text-xl text-black num" id="num">Notifications <span class="count">{count}</span></p>
               <p className="hover:text-blue read" id="read" onClick={handleClick}>Mark all as read</p>
          </div>
        <div className="notification">
            <div className="notifications-content">
               <p className={isBackgroundNone ?  "bg-primary" : "bg-none"}>
                    <img src={require("../images/avatar-mark-webber.jpg")} className="" alt="image of mark webber"/>
                    <span className="ml-5">
                         <strong className="text-black">Mark Webber</strong> reacted to your recent post <strong className="hover:text-blue">My first tournament today!</strong><span className={isBackgroundNone ?  "dot" : "no-dot"}></span>
                         <br />
                         1m ago
                    </span>
               </p> 
               <p className={isBackgroundNone ?  "bg-primary" : "bg-none"}>
                    <img src={require("../images/avatar-angela-gray.jpg")} className="w-50px h-50px" alt="image of angela gray"/>
                    <span className="ml-5">
                         <strong className="text-black">Angela Gray</strong> followed you <span className={isBackgroundNone ?  "dot" : "no-dot"}></span>
                         <br />
                         5m ago
                    </span>
               </p>
               <p className={isBackgroundNone ?  "bg-primary" : "bg-none"}>
                    <img src={require("../images/avatar-jacob-thompson.jpg")} className="" alt="image of jacob thompson"/>
                    <span className="ml-5">
                         <strong className="text-black">Jacob Thompson</strong> has joined your group <strong className="hover:text-blue">Chess Club</strong> <span className={isBackgroundNone ?  "dot" : "no-dot"}></span>
                         <br />
                         1 day ago
                    </span>
               </p>
               <p className="flex">
                    <img src={require("../images/avatar-rizky-hasanuddin.jpg")} className="image of rizky hansanuddin"/>
                    <span className="ml-5">
                         <strong className="text-black">Rizky Hasanuddin</strong> sent you a private message
                         <br />
                         5 days ago
                         <br/>
                    </span>
               </p>
               <p className="comment">
                    Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
                    <br />
                    I'm already having lots of fun and improving my game.
               </p>
               <p className="flex">
                    <img src={require("../images/avatar-kimberly-smith.jpg")} className="" alt="image of kimberly smith"/>
                    <span className="ml-5">
                         <strong className="text-black">Kimberly Smith</strong> commented on your picture
                         <br />
                         1 week ago
                    </span>
                    <img src={require("../images/image-chess.jpg")} className="chess rounded" alt="image of kimberly smith"/>
               </p>
               <p className="flex">
                    <img src={require("../images/avatar-nathan-peterson.jpg")} className="" alt="image of nathan peterson"/>
                    <span className="ml-5">
                         <strong className="text-black">Nathan Peterson</strong> reacted to your recent post <strong className="hover:text-blue">5 end-game strategies to increase your win rate</strong>
                         <br />
                         2 weeks ago
                    </span>
               </p>
               <p className="flex">
                   <img src={require("../images/avatar-anna-kim.jpg")} className="" alt="image of anna kim"/>
                    <span className="ml-5">
                         <strong className="text-black">Anna Kim</strong> left the group <strong className="hover:text-blue">Chess Club</strong>
                         <br />
                         2 weeks ago
                    </span>
               </p>
            </div>
        </div>
     </>
     
    );
}

export default Notifications;