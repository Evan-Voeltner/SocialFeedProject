import React, { useState } from "react";
import "./Post.css";

const Post = (props) => {
  const [likeButtonClass, setLikeButtonClass] = useState('inactive-like-button');
  const [dislikeButtonClass, setDislikeButtonClass] = useState('inactive-dislike-button');

  function handleLikeClick(){
    if(likeButtonClass === 'inactive-like-button'){
      setLikeButtonClass("active-like-button");
    }
    else{
      setLikeButtonClass("inactive-like-button");
    }
  }

  function handleDislikeClick(){
    if(dislikeButtonClass === 'inactive-dislike-button'){
      setDislikeButtonClass("active-dislike-button");
    }
    else{
      setDislikeButtonClass("inactive-dislike-button");
    }
  }

  return (
    <div className="border-box" style={{'backgroundColor': 'lightblue'}}>
      <h1>{props.post.name}</h1>
      <p>{props.post.post}</p>
      <span>
        <button className={likeButtonClass} onClick={handleLikeClick}>Like</button>
        <button className={dislikeButtonClass} onClick={handleDislikeClick}>Dislike</button>
      </span>
    </div>
  );
};

export default Post;
