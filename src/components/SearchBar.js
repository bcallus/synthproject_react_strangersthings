import React, { useState } from 'react';

const SearchBar = (postsList) => {

    const [searchTerm, setSearchTerm] = useState("")

    const handleSearch = async (event) => {
        event.preventDefault();
        console.log(postsList)
        console.log("searchTerm", searchTerm)

        function findMatches (postsList, searchTerm) {
            
        }
    }

    return (
        <form onSubmit={handleSearch}>
            <input type="text" placeholder="Search..." onChange={(event) => setSearchTerm(event.target.value)}/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default SearchBar;