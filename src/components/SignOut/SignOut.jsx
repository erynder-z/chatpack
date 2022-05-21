import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import './SignOut.css';

function SignOut() {
  return (
    getAuth.currentUser && (
      <button className="signoutBtn" onClick={() => signOut(getAuth())} type="button">
        {' '}
        Sign Out
      </button>
    )
  );
}

export default SignOut;
