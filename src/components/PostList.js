import React, { Component } from 'react';

import './PostList.css';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Julio Alcantara',
          avatar: 'https://via.placeholder.com/64'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://via.placeholder.com/64'
            },
            content:
              'Conteúdo do comentário, Conteúdo do comentário, Conteúdo do comentário, Conteúdo do comentário, Conteúdo do comentário, Conteúdo do comentário, Conteúdo do comentário, Conteúdo do comentário, Conteúdo do comentário, Conteúdo do comentário'
          }
        ]
      },
      {
        id: 2
        // Restante dos dados de um novo post
      }
    ]
  };

  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="cardHeader">
            <img
              className="userAvatar"
              src={this.state.posts[0].author.avatar}
              alt="User avatar"
            />
            <div className="postInfo">
              <p className="userName">{this.state.posts[0].author.name}</p>
              <p className="date">{this.state.posts[0].date}</p>
            </div>
          </div>
          <div className="cardBody">
            <p className="content">{this.state.posts[0].content}</p>
            <hr />
            <div className="comment">
              <img
                className="commentAvatar userAvatar"
                src={this.state.posts[0].comments[0].author.avatar}
                alt="User avatar"
              />
              <div className="commentContent">
                <span className="commentAuthor">
                  {this.state.posts[0].comments[0].author.name}
                </span>
                {this.state.posts[0].comments[0].content}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostList;
