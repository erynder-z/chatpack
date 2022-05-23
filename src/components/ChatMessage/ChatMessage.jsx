/* eslint-disable react/prop-types */
import React from 'react';
import { fromUnixTime, format } from 'date-fns';
import './ChatMessage.css';
import placeholder from '../../assets/placeholder.png';

function ChatMessage(props) {
  const { message, auth } = props;
  const { text, uid, photoURL, createdAt } = message;
  const messageClass = uid === auth.currentUser.id ? 'sent' : 'received';

  const formattedDate = format(fromUnixTime(createdAt.seconds), 'dd LLL yyy @ k:m');

  return (
    <div className={`message ${messageClass}`}>
      {!photoURL ? (
        <img src={placeholder} alt={placeholder} />
      ) : (
        <img src={photoURL} alt={photoURL} />
      )}
      <div className="msg-container">
        <h5>Sent: {formattedDate} </h5>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default ChatMessage;
