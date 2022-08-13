import { Auth } from 'firebase/auth';
import React, { FC, useEffect, useState } from 'react';
import './UserInfo.css';

interface Props {
  auth: Auth;
}

const UserInfo: FC<Props> = ({ auth }) => {
  const [userInfo, setUserInfo] = useState('');

  useEffect(() => {
    if (auth.currentUser?.displayName) {
      setUserInfo(auth.currentUser.displayName);
    }
  }, []);

  return <div className="userinfo">Welcome, {userInfo}</div>;
};

export default UserInfo;
