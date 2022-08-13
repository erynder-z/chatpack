import React, { FC, useEffect, useState } from 'react';
import { collection, DocumentData, Firestore, query } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { BsArrowBarDown } from 'react-icons/bs';
import './OnlineUsers.css';

interface Props {
  firestore: Firestore;
}

const OnlineUsers: FC<Props> = ({ firestore }) => {
  const [showOnline, setShowOnline] = useState<boolean>(false);
  const [onlineUsers, setOnlineUsers] = useState<DocumentData[]>([]);

  const userRef = collection(firestore, 'onlineUsers');
  const q = query(userRef);
  const [online] = useCollectionData(q);

  const toggle = () => {
    setShowOnline(!showOnline);
  };

  useEffect(() => {
    if (online) {
      setOnlineUsers(online);
    }
  }, [online]);

  return (
    <div className={`online-users ${showOnline ? 'active' : ''}`}>
      <div className="usr-container">
        <h4>online users:</h4>
        {onlineUsers &&
          showOnline &&
          onlineUsers.map((usr) => {
            return (
              <li key={onlineUsers.indexOf(usr).toString()} className="online-usr">
                {usr.displayName}
              </li>
            );
          })}
      </div>
      <button className="online-users-toggle" onClick={toggle} type="button">
        <BsArrowBarDown
          size="1rem"
          color="whitesmoke"
          className={`${showOnline ? 'expanded' : 'collapsed'}`}
        />
      </button>
      {/*    {showOnline && <div className="bar" />} */}
    </div>
  );
};

export default OnlineUsers;
