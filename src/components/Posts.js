import React from 'react'
import Post from './Post'


const Posts = (props) => {
    
    console.log("postsList", props.postsList)
    console.log("props.postsList.posts", props.postsList.posts)

    return (
        <div>
        {props.postsList.posts ? props.postsList.posts.map(post => 
            <Post 
            post={post}
            />
        ) : null}
        </div>
    )

}

export default Posts;

