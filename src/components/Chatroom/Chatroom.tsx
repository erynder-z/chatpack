import { Auth } from 'firebase/auth';
import {
  addDoc,
  collection,
  orderBy,
  query,
  limit,
  serverTimestamp,
  Firestore
} from 'firebase/firestore';
import React, { FC, useEffect, useRef, useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { MdSend } from 'react-icons/md';
import ChatMessage from '../ChatMessage/ChatMessage';
import './Chatroom.css';

interface Props {
  auth: Auth;
  firestore: Firestore;
}

const Chatroom: FC<Props> = ({ auth, firestore }) => {
  const dummy = useRef<HTMLSpanElement>(null);
  const messagesRef = collection(firestore, 'messages');
  const q = query(messagesRef, orderBy('timestamp', 'desc'), limit(25));

  const [messages] = useCollectionData(q);
  const [formValue, setFormValue] = useState('');

  const scrollToBottom = () => {
    dummy?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (formValue !== '' && auth.currentUser) {
      const { uid, photoURL } = auth.currentUser;

      await addDoc(collection(firestore, 'messages'), {
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
    const viewport = document.querySelector('meta[name=viewport]') as HTMLMetaElement;
    viewport?.setAttribute('content', `${viewport.content}, height=${window.innerHeight}`);
  }, []);

  return (
    <div className="chatroom">
      <div className="messages">
        {messages &&
          messages
            .reverse()
            .map((msg) => (
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
};

export default Chatroom;
