import React from 'react'
import "./topbar.css"

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                {/* home 
            reels
            notification
            search */}
                <div className="topbarLeft">
                    <div className="instaLogo">
                        Logo
                    </div>
                    <ul className="itemList">
                        <li className="items">Home</li>
                        <li className="items">seach</li>
                        <li className="items">Notification</li>
                        {/* <li className="items">search</li> */}

                    </ul>
                    <input placeholder='Search' type="text" id="search" className='searhBar' />
                </div>
                <div className="topbarRight">

                    <a href="/#" class="notification">
                        <span>Inbox</span>
                        <span class="badge">3</span>
                    </a>
                    <div className="profileIcon">
                    </div>
                </div>

            </div>
        </div>
    )
}
