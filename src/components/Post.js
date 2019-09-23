import React from 'react';

import Comment from './Comment';

import './Post.css';

const Post = ({ post }) => {
  return (
    <div className="card">
      <div className="cardHeader">
        <img
          className="userAvatar"
          src={post.author.avatar}
          alt="User avatar"
        />
        <div className="postInfo">
          <p className="userName">{post.author.name}</p>
          <p className="date">{post.date}</p>
        </div>
      </div>
      <div className="cardBody">
        <p className="content">{post.content}</p>
        <hr />
        {post.comments.map(comment => {
          return <Comment key={comment.id} comment={comment} />;
        })}
      </div>
    </div>
  );
};

export default Post;
