import React, { useState } from "react";

const Post = (props) => {
  return (
    <div>
      <h1>{props.post.name}</h1>
      <p>{props.post.post}</p>
    </div>
  );
};

export default Post;
