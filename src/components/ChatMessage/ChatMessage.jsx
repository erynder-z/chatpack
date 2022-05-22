/* eslint-disable react/prop-types */
import React from 'react';
import './ChatMessage.css';
import placeholder from '../../assets/placeholder.png';

function ChatMessage(props) {
  const { message, auth } = props;
  const { text, uid, photoURL } = message;
  const messageClass = uid === auth.currentUser.id ? 'sent' : 'received';

  return (
    <div className={`message ${messageClass}`}>
      {!photoURL ? (
        <img src={placeholder} alt={placeholder} />
      ) : (
        <img src={photoURL} alt={photoURL} />
      )}
      <p>{text}</p>
    </div>
  );
}

export default ChatMessage;
