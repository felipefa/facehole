import React from 'react';

import './Header.css';

const Header = ({ user }) => {
  return (
    <div className="header">
      <h1 className="logo">facehole</h1>
      <div className="user">
        <a className="userName">{user.name}</a>
        <img className="userAvatar" src={user.avatar} alt="User avatar" />
      </div>
    </div>
  );
};

export default Header;
