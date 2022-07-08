import React, { useState, useEffect } from 'react'

import { fetchAllPosts } from '../api'

const Posts = () => {

    const [postsList, setPostsList] = useState([]);


    useEffect(() => {
        fetchAllPosts().then((results) => {
            console.log(results.data.posts)
        })
        //results.data.posts.map((post => <div>{post}</div> )) shows each post, fix how to render, state may be wrong
    }, []);

    return (
        <div>
            <h2>PostsTest</h2>
            <div>{ postsList}</div>
        </div>
    )
}

export default Posts;