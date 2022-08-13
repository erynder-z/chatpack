import { Auth } from 'firebase/auth';
import { deleteDoc, doc, Firestore } from 'firebase/firestore';
import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import './SignOut.css';

interface Props {
  auth: Auth;
  firestore: Firestore;
}

function SignOut({ auth, firestore }: Props) {
  const userSignOut = async () => {
    if (auth.currentUser) {
      try {
        auth.signOut();
        await deleteDoc(doc(firestore, 'onlineUsers', auth.currentUser.uid));
      } catch (err: unknown) {
        if (typeof err === 'string') {
          console.log(err);
        }
      }
    }
  };

  return (
    auth.currentUser && (
      <button
        className="signoutBtn"
        onClick={() => {
          userSignOut();
        }}
        type="button">
        {' '}
        <FiLogOut size="1.5rem" />
      </button>
    )
  );
}

export default SignOut;
