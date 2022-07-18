import React from "react";

const SearchBar = ({ postsList, searchTerm, setSearchTerm, filteredPosts, setFilteredPosts }) => {

  const handleSearch = async (event) => {
    event.preventDefault();

    function findMatches(post, keyword) {
        keyword = searchTerm.toLowerCase();
      if (
        post.title.toLowerCase().includes(keyword) ||
        post.description.toLowerCase().includes(keyword) ||
        post.price.includes(keyword) ||
        post.location.toLowerCase().includes(keyword)
      )
        return true;
    }
      
    const filteredPostsArray = postsList.filter(post => findMatches(post, searchTerm));
    setFilteredPosts(filteredPostsArray)
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
