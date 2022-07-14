import React from "react";

const AddPost = () => {
  return (
    <form>
      <h1>Add New Post</h1>
      <label>
        <p>Title</p>
        <input type="text" />
      </label>
      <label>
        <p>Description</p>
        <input type="text" />
      </label>
      <label>
        <p>Price</p>
        <input /> {/*make type for currency? */}
      </label>
      <label>
        <p>Location</p>
        <input type="text" />
      </label>
      <label>
        <div>
          <p>Willing to deliver</p>
          <input type="checkbox" /> {/*fix inline style here */}
        </div>
      </label>
      <button type="submit">Create</button>
    </form>
  );
};

export default AddPost;
