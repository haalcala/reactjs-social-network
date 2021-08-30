import { Bookmark, Chat, Event, HelpOutline, People, PlayArrow, RssFeed, School } from '@material-ui/icons'
import React from 'react'

import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeed className="sidebarListItemIcon"/>
                    <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                    <Chat className="sidebarListItemIcon"/>
                    <span className="sidebarListItemText">Chats</span>
                </li>
                <li className="sidebarListItem">
                    <PlayArrow className="sidebarListItemIcon"/>
                    <span className="sidebarListItemText">Videos</span>
                </li>
                <li className="sidebarListItem">
                    <People className="sidebarListItemIcon"/>
                    <span className="sidebarListItemText">Groups</span>
                </li>
                <li className="sidebarListItem">
                    <Bookmark className="sidebarListItemIcon"/>
                    <span className="sidebarListItemText">Bookmark</span>
                </li>
                <li className="sidebarListItem">
                    <HelpOutline className="sidebarListItemIcon"/>
                    <span className="sidebarListItemText">Questions</span>
                </li>
                <li className="sidebarListItem">
                    <Event className="sidebarListItemIcon"/>
                    <span className="sidebarListItemText">Events</span>
                </li>
                <li className="sidebarListItem">
                    <School className="sidebarListItemIcon"/>
                    <span className="sidebarListItemText">Cources</span>
                </li>
                <li className="sidebarListItem">
                    <RssFeed className="sidebarListItemIcon"/>
                    <span className="sidebarListItemText">Feed</span>
                </li>
            </ul>
            <button className="sidebarButton">Show More</button>
            <hr className="sidebarHr"/>
            <ul className="sidebarFriendList">
                <li className="sidebarFriendListItem">
                    <img src="/assets/person/1.png" alt="" className="sidebarFriendListItemProfileImage" />
                    <span className="sidebarFriendListItemName">asdfasdf</span>
                </li>
                <li className="sidebarFriendListItem">
                    <img src="/assets/person/1.png" alt="" className="sidebarFriendListItemProfileImage" />
                    <span className="sidebarFriendListItemName">asdfasdf</span>
                </li>
                <li className="sidebarFriendListItem">
                    <img src="/assets/person/1.png" alt="" className="sidebarFriendListItemProfileImage" />
                    <span className="sidebarFriendListItemName">asdfasdf</span>
                </li>
                <li className="sidebarFriendListItem">
                    <img src="/assets/person/1.png" alt="" className="sidebarFriendListItemProfileImage" />
                    <span className="sidebarFriendListItemName">asdfasdf</span>
                </li>
                <li className="sidebarFriendListItem">
                    <img src="/assets/person/1.png" alt="" className="sidebarFriendListItemProfileImage" />
                    <span className="sidebarFriendListItemName">asdfasdf</span>
                </li>
                <li className="sidebarFriendListItem">
                    <img src="/assets/person/1.png" alt="" className="sidebarFriendListItemProfileImage" />
                    <span className="sidebarFriendListItemName">asdfasdf</span>
                </li>
            </ul>
            </div>
        </div>
    )
}
