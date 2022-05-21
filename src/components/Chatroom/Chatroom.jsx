import { collection, orderBy, query, limit, serverTimestamp } from 'firebase/firestore';
import React, { useRef, useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from '../ChatMessage/ChatMessage';
import './Chatroom.css';

function Chatroom(props) {
  const { auth, firestore } = props;
  const dummy = useRef();
  const messagesRef = collection(firestore, 'messages');
  const q = query(messagesRef, orderBy('createdAt'), limit(25));

  const [messages] = useCollectionData(q, { idField: 'id' });
  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await messagesRef.add({
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL
    });

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <main>
        <div className="chatroom">
          {messages &&
            messages.map((msg) => <ChatMessage key={msg.id} auth={auth} message={msg} />)}
        </div>{' '}
        <span ref={dummy} />
      </main>
      <form action="input" onSubmit={sendMessage}>
        <input
          type="text"
          value={formValue}
          onChange={(e) => {
            setFormValue(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Chatroom;
