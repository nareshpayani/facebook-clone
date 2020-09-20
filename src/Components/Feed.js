import React, {useState, useEffect}from 'react'
import "../Css/Feed.css";
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';
import db from '../firebase';


function Feed() {

    // pull the database info

    const [posts, setPosts] = useState([]);


    useEffect(() => {
        db.collection('posts')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => (
            setPosts(snapshot.docs.map((doc) => ({id: doc.id, data: doc.data()})))
            ));
    }, [])


    return (
        <div className="feed">
            
            {/* Status - Component */}
            <StoryReel />

            {/* MessageSender - Component */}
            <MessageSender/>

            {/* Post - Component */}

            {posts.map((post) => (

                <Post 
                key = {post.id}
                image= {post.data.image}
                profilePic={post.data.profilePic}
                username={post.data.username}
                timestamp={post.data.timestamp}
                message ={post.data.message}
                />
            ))}
           
        </div>
    )
}

export default Feed
