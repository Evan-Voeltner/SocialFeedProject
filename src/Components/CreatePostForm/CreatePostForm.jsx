import React, { useState } from "react";

const AddEntryForm = (props) => {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    let newPost = {
      name: name,
      post: post,
    };

    props.addNewPost(newPost);
  }

  return (
    <form onSubmit={handleSubmit} style={{'width' : '30em', 'margin-left': '30%',}}>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></input>
      </div>
      <div className="form-group">
        <label>Post</label>
        <input
          type="text"
          className="form-control"
          value={post}
          onChange={(event) => setPost(event.target.value)}
        ></input>
      </div>
      <button type="submit" className="btn btn-primary" style={{'margin-top': "1em"}}>Add</button>
    </form>
  );
};

export default AddEntryForm;
