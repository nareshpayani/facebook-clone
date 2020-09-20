import React from 'react'
import "../Css/StoryReel.css";
import Story from './Story';



function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
            image="https://blog.azanic.com/wp-content/uploads/2019/11/bithday-story-status.jpg"
            profileSrc="https://lh3.googleusercontent.com/a-/AOh14Gg8MmTfF4-Dg7YSKQD9kg6ihlbtFlZLQYV_zL50NA"
            title="Naresh Payani"
            />

            <Story 
            image="https://blog.azanic.com/wp-content/uploads/2019/11/birthday-story-status-3.jpg"
            profileSrc="https://avatars.dicebear.com/api/avataaars/${seed}.svg"
            title="Spoorthy Naresh"
            />
            <Story 
            image="https://blog.azanic.com/wp-content/uploads/2019/11/Birthday-Status.jpg"
            profileSrc="https://avatars.dicebear.com/api/avataaars/${seed}.svg"
            title="Alekhya Naresh"
            />

            <Story 
            image="https://blog.azanic.com/wp-content/uploads/2019/11/Birthday-Story-background.jpg"
            profileSrc="https://avatars.dicebear.com/api/avataaars/${seed}.svg"
            title="Lokesh Payani"
            />

            <Story 
            image="https://blog.azanic.com/wp-content/uploads/2019/11/abstract-background-3.jpg"
            profileSrc="https://avatars.dicebear.com/api/avataaars/${seed}.svg"
            title="LeeLa"
            />

        <Story 
            image="https://blog.azanic.com/wp-content/uploads/2019/11/abstract-background-3.jpg"
            profileSrc="https://avatars.dicebear.com/api/avataaars/${seed}.svg"
            title="LeeLa"
            />


        </div>
    )
}

export default StoryReel
