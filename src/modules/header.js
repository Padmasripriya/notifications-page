import React from 'react-dom';

export function Header() {
    return(
        <div className="notifications-count flex gap-5 justify-between">
                <p className="font-bold text-xl text-black">Notifications <span class="count">3</span></p>
                <p>Mark all as read</p>
            </div>
    );
}

export default Header;