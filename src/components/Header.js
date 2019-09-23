import React from 'react';

import './Header.css';

const Header = ({ user }) => {
  return (
    <div className="header">
      <h1 className="logo">facehole</h1>
      <div className="user">
        <a className="userName">User</a>
        <img
          className="userAvatar"
          src="https://via.placeholder.com/32"
          alt="User avatar"
        />
      </div>
    </div>
  );
};

export default Header;
