import { Avatar } from '@material-ui/core';
import React, {useState} from 'react';
import "../Css/MessageSender.css";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';


function MessageSender() {

    //Input message Catch
    const [input, setInput] = useState('')
    // Image URL
    const [imageUrl, setImageUrl] = useState('')



    const handleSubmit = e => {
        e.preventDefault();

        // database mapping


        setInput("");
        setImageUrl("");
    };

    return (
        <div className="messageSender">

            {/* Post Card- Top Section */}
            <div className="messageSender__top">
                <Avatar />
                <form>
                    <input 
                    value={input}
                    onChange = {e => setInput(e.target.value)}
                    className="messageSender__input" 
                    type="text" 
                    placeholder= {`What's on your mind Naresh Payani`}

                    />


                    <input 
                    value={imageUrl}
                    onChange = {e => setImageUrl(e.target.value)}
                    type="text" 
                    placeholder="Image URL (Optional)" 
                    
                    />

                    <button onClick={handleSubmit} type="submit">Hidden Submit</button>
                </form>
            </div>


        {/* Post Card- Bottom Section */}
            <div className="messageSender__bottom">
                <div className="messageSender__options">
                    <VideocamIcon style= {{color: "red"}} />
                    <h4>Live Video</h4>
                </div>

                <div className="messageSender__options">
                    <PhotoLibraryIcon style= {{color: "green"}} />
                    <h4>Photo/Video</h4>
                </div>

                <div className="messageSender__options">
                    <InsertEmoticonIcon style= {{color: "orange"}} />
                    <h4>Feeling/Activity</h4>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
