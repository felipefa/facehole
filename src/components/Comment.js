import React from 'react';

import './Comment.css';

const Comment = ({ comment }) => {
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
};

export default Comment;
