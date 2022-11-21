import React, { useState } from "react";
import Post from "../Post/Post";
const PostList = (props) => {
  return (
    <div>
      {props.parentPosts.map((post) => {
        return (
          <Post post={post}/>
        );
      })}
    </div>
  );
};

export default PostList;
