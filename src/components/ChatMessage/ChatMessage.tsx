import React, { FC } from 'react';
import { fromUnixTime, format } from 'date-fns';
import './ChatMessage.css';
import placeholder from '../../assets/placeholder.png';
import { Auth } from 'firebase/auth';
import { DocumentData } from 'firebase/firestore';

interface Props {
  auth: Auth;
  message: DocumentData;
}

const ChatMessage: FC<Props> = ({ auth, message }) => {
  const { text, uid, photoURL, timestamp } = message;
  const messageClass = uid === auth?.currentUser?.uid ? 'sent' : 'received';

  return (
    <div className={`message ${messageClass}`}>
      {!photoURL ? (
        <img src={placeholder} alt={placeholder} />
      ) : (
        <img src={photoURL} alt={photoURL} />
      )}
      <div className="msg-container">
        <h5>
          Sent:{' '}
          {timestamp === null
            ? format(fromUnixTime(Date.now()), 'dd LLL yyy @ k:mm')
            : format(fromUnixTime(timestamp.seconds), 'dd LLL yyy @ k:mm')}{' '}
        </h5>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
