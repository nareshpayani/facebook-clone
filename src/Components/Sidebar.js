
import React from 'react'
import "../Css/Sidebar.css"
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import EventIcon from '@material-ui/icons/Event';
import AnnouncementIcon from '@material-ui/icons/Announcement';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://lh3.googleusercontent.com/a-/AOh14Gg8MmTfF4-Dg7YSKQD9kg6ihlbtFlZLQYV_zL50NA" title="Naresh Payani"/>
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19"/>
            <SidebarRow Icon={AnnouncementIcon} title="News Feed"/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon} title="Groups"/>
            <SidebarRow Icon={ChatIcon} title="Messagnger"/>
            <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Watch"/>
            <SidebarRow Icon={EventIcon} title="Events"/>
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="See More"/>
            
           
        </div>
    )
}

export default Sidebar
