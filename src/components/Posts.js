import React from 'react'


const Posts = (props) => {
    
    console.log("postsList", props.postsList)
    console.log("props.postsList.posts", props.postsList.posts)
    props.postsList.posts ? props.postsList.posts.map(post => {
        console.log("title", post.title)
        return (
            <div>
                <h1>post.title</h1>
            </div>
        )
    }
    ) : console.log("null");
    // console.log("post", props.post)

}

export default Posts;