import React, { useState } from "react";

const SearchBar = ({ postsList, searchTerm, setSearchTerm, filteredPosts, setFilteredPosts }) => {
    // const [searchTerm, setSearchTerm] = useState("");
    // const [filteredPosts, setFilteredPosts] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    console.log(postsList);
    // console.log("searchTerm", searchTerm);

    function findMatches(post, keyword) {
        keyword = searchTerm.toLowerCase();
        console.log("searchTerm", searchTerm)
          console.log("keyword", keyword)
      if (
        post.title.toLowerCase().includes(keyword) ||
        post.description.toLowerCase().includes(keyword) ||
        post.price.includes(keyword) ||
        post.location.toLowerCase().includes(keyword)
      )
        return true;
    }
      
    const filteredPostsArray = postsList.filter(post => findMatches(post, searchTerm));
    console.log("filteredPostsArray", filteredPostsArray)
    setFilteredPosts(filteredPostsArray)
    console.log(filteredPosts)
    // const postsToDisplay = searchTerm.length ? filteredPosts : posts;
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchBar;
