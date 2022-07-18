import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNewPost } from "../api";

const AddPost = ({ token, postsList, setPostsList }) => {
    const navigate = useNavigate();

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [location, setLocation] = useState("[On Request]")
    const [willDeliver, setWillDeliver] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = await createNewPost({
            token,
            title,
            description,
            price,
            location,
            willDeliver,
        });
        console.log("data from new post submission", data)
        const newPost = data.data.post
        console.log(newPost)
        console.log("postsList from addNewPost", postsList)
        setPostsList([...postsList, newPost])
        console.log("postsList from addNewPost", postsList)
        alert("Your post has been sucessfully added.")
        navigate("/posts")
    }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add New Post</h2>
      <label>
        <p>Title</p>
              <input type="text" onChange={(event) => {setTitle(event.target.value)} } required/>
      </label>
      <label>
        <p>Description</p>
              <input type="text" onChange={(event) => {setDescription(event.target.value)}} required/>
      </label>
      <label>
        <p>Price</p>
        <input type="text" onChange={(event) => {setPrice(event.target.value)}} required/>
      </label>
      <label>
        <p>Location</p>
        <input type="text" onChange={(event) => {setLocation(event.target.value)}}/>
      </label>
      <label>
        <div className="inline-checkbox">
          <p>Willing to deliver?</p>
          <input type="checkbox" onChange={(event) => { setWillDeliver(!willDeliver) }} />
          {/*fix inline style here */}
        </div>
      </label>
      <button type="submit">Create</button>
    </form>
  );
};

export default AddPost;
