/* eslint-disable react/prop-types */
import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import './SignOut.css';

function SignOut({ auth, firestore }) {
  const userSignOut = async () => {
    auth.signOut();
    await deleteDoc(doc(firestore, 'onlineUsers', auth.currentUser.uid));
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
