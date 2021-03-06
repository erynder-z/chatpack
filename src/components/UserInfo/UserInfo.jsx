/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import './UserInfo.css';

function UserInfo({ auth }) {
  const [userInfo, setUserInfo] = useState('');

  useEffect(() => {
    setUserInfo(auth.currentUser.displayName);
  }, []);

  return <div className="userinfo">Welcome, {userInfo}</div>;
}

export default UserInfo;
