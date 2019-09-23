import React from 'react';

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
          return (
            <div className="comment" key={comment.id}>
              <img
                className="commentAvatar userAvatar"
                src={comment.author.avatar}
                alt="User avatar"
              />
              <div className="commentContent">
                <span className="commentAuthor">{comment.author.name}</span>
                {comment.content}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Post;
