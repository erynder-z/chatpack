/* eslint-disable react/prop-types */
import React from 'react';
import { fromUnixTime, format } from 'date-fns';
import './ChatMessage.css';
import placeholder from '../../assets/placeholder.png';

function ChatMessage({ auth, message }) {
  const { text, uid, photoURL, timestamp } = message;

  const messageClass = uid === auth.currentUser.id ? 'sent' : 'received';

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
            ? format(fromUnixTime(Date.now()), 'dd LLL yyy @ k:m')
            : format(fromUnixTime(timestamp.seconds), 'dd LLL yyy @ k:m')}{' '}
        </h5>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default ChatMessage;
