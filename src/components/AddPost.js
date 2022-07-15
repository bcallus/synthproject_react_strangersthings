import React, {useState} from "react";
import { createNewPost } from "../api";

const AddPost = ({ token, postsList, setPostsList }) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [location, setLocation] = useState("")
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

    }

  return (
    <form className="add-new-post-form" onSubmit={handleSubmit}>
      <h1>Add New Post</h1>
      <label>
        <p>Title</p>
              <input type="text" onChange={(event) => {setTitle(event.target.value)} } />
      </label>
      <label>
        <p>Description</p>
              <input type="text" onChange={(event) => {setDescription(event.target.value)}} />
      </label>
      <label>
        <p>Price</p>
        <input type="number" onChange={(event) => {setPrice(event.target.value)}}/> {/*make type for currency? */}
      </label>
      <label>
        <p>Location</p>
        <input type="text" onChange={(event) => {setLocation(event.target.value)}}/>
      </label>
      <label>
        <div>
          <p>Willing to deliver</p>
          <input type="checkbox" onChange={(event) => {setWillDeliver(!willDeliver)}}/> {/*fix inline style here */}
        </div>
      </label>
      <button type="submit">Create</button>
    </form>
  );
};

export default AddPost;
