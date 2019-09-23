import React, { Component } from 'react';

import Post from './Post';

import './PostList.css';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Felipe Araujo',
          avatar: 'https://avatars0.githubusercontent.com/u/12715851'
        },
        date: '23 Set 2019',
        content: 'Pessoal, alguém já viu os novos vídeos da Rocketseat?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Frederiko Cesar',
              avatar: 'https://avatars3.githubusercontent.com/u/35873365'
            },
            content: 'Já vi todos!'
          },
          {
            id: 2,
            author: {
              name: 'Autímio Brito Filho',
              avatar: 'https://avatars0.githubusercontent.com/u/19158164'
            },
            content: 'Só vi os primeiros... :('
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Frederiko Cesar',
          avatar: 'https://avatars3.githubusercontent.com/u/35873365'
        },
        date: '17 Set 2019',
        content: 'O que estão achando do bootcamp da Rocketseat?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Felipe Araujo',
              avatar: 'https://avatars0.githubusercontent.com/u/12715851'
            },
            content: 'É muito bom, estou gostando bastante!'
          },
          {
            id: 2,
            author: {
              name: 'Autímio Brito Filho',
              avatar: 'https://avatars0.githubusercontent.com/u/19158164'
            },
            content: 'Eles tem as melhores aulas que eu já vi!'
          },
          {
            id: 3,
            author: {
              name: 'Frederiko Cesar',
              avatar: 'https://avatars3.githubusercontent.com/u/35873365'
            },
            content: 'Realmente, é bom mesmo...'
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div className="container">
        {this.state.posts.map(post => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
    );
  }
}

export default PostList;
