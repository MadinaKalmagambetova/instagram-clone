import React from 'react';
import './post.css';
import { Avatar } from "@mui/material";


function Post({userName, caption, imageUrl}) {
  return (
    <div className='post'>
        <div className='postHeader'>
            <Avatar
            className="postAvatar"
            alt="Madina"
            src="/static/images/avatar/1.jpg" />
        <h3>{userName}</h3>
        </div>
        <img className="postImage" src={imageUrl} />
        <h4 className='postText'><strong>{userName} </strong>{caption}</h4>

    </div>
  )
}

export default Post;
