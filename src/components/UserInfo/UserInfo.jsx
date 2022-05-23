/* eslint-disable react/prop-types */
import React from 'react';
import './UserInfo.css';

function UserInfo({ auth }) {
  return auth.currentUser && <div className="userinfo">{auth.currentUser.email.split('@')[0]}</div>;
}

export default UserInfo;
