import { Avatar } from '@material-ui/core';
import React from 'react';
import "../Css/Post.css";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';


function Post({image, profilePic, username, timestamp, message}) {
    return (
        <div className="post">
           <div className="post__top">
            <Avatar src={profilePic} className="post__avatar"/>
            <div className="post__topInfo">
                <h3>{username}</h3>
                <p>{new Date (timestamp?.toDate()).toUTCString()}</p>
            </div>
           </div>

           <div className="post__bottom">
                <p>{message}</p>
           </div>

           <div className="post__image" >
                <img src={image} alt="" />
           </div>

           {/* Like Sections */}

           <div className="post__like" >
                <div className="post__likeOptions" >
                    <ThumbUpIcon style = {{color: '#4267b2'}} />
                    <p>123</p>
                </div>

                <div className="post__likeOptions" >
                    <p>2.7k Comments</p>
                    <p>333 Shares</p>
                </div>
           </div>

           <div className="post__options" >
                <div className="post__option" >
                    <ThumbUpAltOutlinedIcon />
                    <p>Like</p>
                </div>

                <div className="post__option" >
                    <ChatBubbleOutlineOutlinedIcon />
                    <p>Comment</p>
                </div>

                <div className="post__option" >
                    <NearMeOutlinedIcon />
                    <p>Share</p>
                </div>
                <div className="post__option" >
                    <AccountCircleOutlinedIcon />
                    <ExpandMoreIcon style = {{marginLeft: '10px'}}/>
                    
                </div>
           </div>

        </div>
    )
}

export default Post
