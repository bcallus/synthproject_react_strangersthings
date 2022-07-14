import React from 'react'
import Post from './Post'


const Posts = ({postsList}) => {
    
    console.log("postsList", postsList)
    console.log("props.postsList.posts", postsList.posts)

    return (
        <div>
        {postsList.posts ? postsList.posts.map(post => 
            <Post 
            key={post._id}
            post={post}
            />
        ) : null}
        </div>
    )

}

export default Posts;

