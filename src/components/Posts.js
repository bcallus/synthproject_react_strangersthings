import React from 'react'
import { Link }  from 'react-router-dom'
import Post from './Post'
import AddPost from './AddPost'


const Posts = ({postsList, isLoggedIn}) => {
    
    console.log("postsList", postsList)
    console.log("props.postsList.posts", postsList.posts)

    return (
        <div>
            <div className="post-page-header">
                <h1>Posts</h1>
                {isLoggedIn ? <Link to="/posts/add">Add New Post</Link> : null}
            </div>
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

