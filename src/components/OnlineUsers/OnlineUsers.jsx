/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { collection, query } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { BsThreeDotsVertical } from 'react-icons/bs';
import './OnlineUsers.css';
import { useAuthState } from 'react-firebase-hooks/auth';

function OnlineUsers({ auth, firestore }) {
  const [showOnline, setShowOnline] = useState(false);
  const [user] = useAuthState(auth);

  const messagesRef = collection(firestore, 'onlineUsers');
  const q = query(messagesRef);
  const [onlineUsers] = useCollectionData(q, { idField: 'id' });

  const toggle = () => {
    setShowOnline(!showOnline);
  };

  return (
    <div className={`online-users ${showOnline ? 'active' : ''}`}>
      {user && (
        <>
          <div className="usr-container">
            <h4>online users:</h4>
            {onlineUsers &&
              showOnline &&
              onlineUsers.map((usr) => {
                return (
                  <li key={onlineUsers.indexOf(usr).toString()} className="online-usr">
                    {usr.name}
                  </li>
                );
              })}
          </div>
          <button className="online-users-toggle" onClick={toggle} type="button">
            <BsThreeDotsVertical size="1rem" color="whitesmoke" />
          </button>
        </>
      )}
    </div>
  );
}

export default OnlineUsers;
