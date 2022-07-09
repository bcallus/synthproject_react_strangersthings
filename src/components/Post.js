import React from 'react';

const Post = (props) => {

    return (
        //possibly add ternaries here, if this exists, render it, if not, don't
        <div className="individual-post">
                <h2>{props.post.title}</h2>
                <p>{props.post.description}</p>
                <p>{props.post.price}</p>
                <h2>{props.post.author.username}</h2>
                <p>{props.post.locaiton}</p>
        </div>
    )
}

export default Post;