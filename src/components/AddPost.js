import React from "react";

const AddPost = () => {
  return (
    <form>
          <h1>Add New Post</h1>
          <label>
              <p>Title</p>
              <input />
          </label>
          <label>
              <p>Description</p>
              <input />
          </label>
          <label>
              <p>Price</p>
              <input />
          </label>
          <label>
              <p>Location</p>
              <input />
          </label>
          <label>
              <p>Willing to deliver</p>
              <input type="checkbox" />
          </label>
          <button type="submit">Create</button>
    </form>
  );
};

export default AddPost;
