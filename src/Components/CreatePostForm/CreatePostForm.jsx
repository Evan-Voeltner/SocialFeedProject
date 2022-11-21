import React, { useState } from "react";

const AddEntryForm = (props) => {
  
    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event){
      event.preventDefault();

      let newPost = {
        name: name,
        post: post,
      }

      props.addNewPost(newPost);
    }
  
    return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" value={name} onChange={(event) => setName(event.target.value)}></input>
      <label>Post</label>
      <input type="text" value={post} onChange={(event) => setPost(event.target.value)}></input>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddEntryForm;
