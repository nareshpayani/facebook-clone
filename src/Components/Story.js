import { Avatar } from '@material-ui/core';
import React from 'react'
import "../Css/Story.css";


function Story({image, profileSrc, title}) {
    return (
        <div className="story__container">
            <div className="story" style={{backgroundImage: `url(${image})`}}>
            <Avatar className="story__avatar" src={profileSrc}/>
            <h4>{title}</h4>
            </div>
        </div>
       
    )
}

export default Story
