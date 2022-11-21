import React, { useState } from "react";
import CreatePostForm from "./Components/CreatePostForm/CreatePostForm";
import PostList from "./Components/PostList/PostList";
function App() {

  const [posts, setPosts] = useState([]);

  function addNewPost(post){
    let tempPosts = [...posts, post];
    setPosts(tempPosts);
  }

  return <div>
    <CreatePostForm addNewPost={addNewPost} />
    <PostList parentPosts={posts}/>
  </div>;
}

export default App;
