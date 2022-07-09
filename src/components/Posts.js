import React from 'react'


const Posts = (props) => {
    
    console.log("postsList", props.postsList)
    console.log("props.postsList.posts", props.postsList.posts)
    // props.postsList.posts ? props.postsList.posts.map(post => {
    //     console.log("title", post.title)
    //     return (
    //         <div>
    //             <h2>post.title</h2>
    //             <p>post.description</p>
    //             <p>post.price</p>
    //             <h2>post.author.username</h2>
    //             <p>post.locaiton</p>
    //         </div>
    //     )
    // }
    // ) : console.log("null");
    // console.log("post", props.post)
    return (
        <div>
        {props.postsList.posts ? props.postsList.posts.map(post => 
                <div key={post._id}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <p>{post.price}</p>
                    <h2>{post.author.username}</h2>
                    <p>{post.locaiton}</p>
                </div>
        ) : console.log("null")};
        </div>
    )

}

export default Posts;