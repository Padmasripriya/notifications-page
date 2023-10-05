import React from 'react-dom';

export function Header() {
    return(
        <div className="notifications-count flex">
                <p className="font-bold text-xl">Notifications 3</p>
                <p>Mark all as read</p>
            </div>
    );
}

export default Header;