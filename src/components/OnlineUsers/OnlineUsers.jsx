/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { collection, query } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { BsThreeDotsVertical } from 'react-icons/bs';
import './OnlineUsers.css';

function OnlineUsers({ firestore }) {
  const [showOnline, setShowOnline] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState([]);

  const messagesRef = collection(firestore, 'onlineUsers');
  const q = query(messagesRef);
  const [online] = useCollectionData(q, { idField: 'id' });

  const toggle = () => {
    setOnlineUsers(online);
    setShowOnline(true);
    const timer = setTimeout(() => setShowOnline(false), 5000);
    return () => clearTimeout(timer);
  };

  return (
    <div className={`online-users ${showOnline ? 'active' : ''}`}>
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
    </div>
  );
}

export default OnlineUsers;
