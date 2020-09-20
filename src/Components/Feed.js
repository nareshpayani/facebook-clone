import React from 'react'
import "../Css/Feed.css";
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';



function Feed() {
    return (
        <div className="feed">
            
            {/* Status - Component */}
            <StoryReel />

            {/* MessageSender - Component */}
            <MessageSender/>

            {/* Post - Component */}

            <Post 
                image= "https://blog.azanic.com/wp-content/uploads/2019/01/Black-and-shine-Birthday-768x480.jpeg"
                profilePic="https://lh3.googleusercontent.com/a-/AOh14Gg8MmTfF4-Dg7YSKQD9kg6ihlbtFlZLQYV_zL50NA"
                username="Naresh Payani"
                timestamp="20-09-2020"
                message ="Happy BirthDay "
            />

            
            <Post 
                image= "https://blog.azanic.com/wp-content/uploads/2019/01/Funny-Happy-Birthday-Wishes-Images-Quotes-768x576.jpg"
                profilePic="https://lh3.googleusercontent.com/a-/AOh14Gg8MmTfF4-Dg7YSKQD9kg6ihlbtFlZLQYV_zL50NA"
                username="Naresh Payani"
                timestamp="20-09-2020"
                message ="Many More Happy returns Of The Day ALEKHYA"
            />

         
        </div>
    )
}

export default Feed
