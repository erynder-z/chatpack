import React from 'react';
import './ChatMessage.css';

function ChatMessage(props) {
  const { message, auth } = props;
  const { text, uid, photoURL } = message;
  const messageClass = uid === auth.currentUser.id ? 'sent' : 'received';

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} alt={photoURL} />
      <p>{text}</p>
    </div>
  );
}

export default ChatMessage;
