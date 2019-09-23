import React from 'react';

import Header from './components/Header';
import PostList from './components/PostList';

import './App.css';

const App = () => {
  const user = {
    name: 'Felipe Araujo',
    avatar: 'https://avatars0.githubusercontent.com/u/12715851'
  };

  return (
    <>
      <Header user={user} />
      <PostList />
    </>
  );
};

export default App;
