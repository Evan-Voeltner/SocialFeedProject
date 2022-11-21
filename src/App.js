import React, { useState } from "react";
import CreatePostForm from "./Components/CreatePostForm/CreatePostForm";
import PostList from "./Components/PostList/PostList";
import './App.css';
function App() {
  const [posts, setPosts] = useState([]);

  function addNewPost(post) {
    let tempPosts = [...posts, post];
    setPosts(tempPosts);
  }

  return (
    <div className="container text-center">
      <div className="border-box" style={{'backgroundColor': 'lightgreen'}}>
        <CreatePostForm addNewPost={addNewPost} />
      </div>
      <div className="border-box" style={{'backgroundColor': 'black'}}>
        <PostList parentPosts={posts} />
      </div>
      
    </div>
  );
}

export default App;
