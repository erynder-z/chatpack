/* eslint-disable react/prop-types */
import { addDoc, collection, orderBy, query, limit, serverTimestamp } from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { MdSend } from 'react-icons/md';
import ChatMessage from '../ChatMessage/ChatMessage';
import './Chatroom.css';

function Chatroom({ auth, firestore }) {
  const dummy = useRef();
  const messagesRef = collection(firestore, 'messages');
  const q = query(messagesRef, orderBy('timestamp'), limit(25));

  const [messages] = useCollectionData(q, { idField: 'id' });
  const [formValue, setFormValue] = useState('');

  const scrollToBottom = () => {
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (formValue !== '') {
      const { uid, photoURL } = auth.currentUser;

      /* const docRef =  */ await addDoc(collection(firestore, 'messages'), {
        text: formValue,
        timestamp: serverTimestamp(),
        uid,
        photoURL
      });
    }

    setFormValue('');
    scrollToBottom();
  };

  // avoid smartphone keybaords from changing the viewport
  useEffect(() => {
    const viewport = document.querySelector('meta[name=viewport]');
    viewport.setAttribute('content', `${viewport.content}, height=${window.innerHeight}`);
  }, []);

  return (
    <div className="chatroom">
      <div className="messages">
        {messages &&
          messages.map((msg) => (
            <ChatMessage key={messages.indexOf(msg).toString()} message={msg} auth={auth} />
          ))}
        <span ref={dummy} />
      </div>

      <form action="input" onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="enter message"
          value={formValue}
          onChange={(e) => {
            setFormValue(e.target.value);
          }}
        />
        <button type="submit">
          <MdSend />
        </button>
      </form>
    </div>
  );
}

export default Chatroom;
