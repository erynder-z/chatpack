import React from 'react';
import './SignOut.css';

function SignOut(props) {
  const { auth } = props;
  return (
    auth.currentUser && (
      <button className="signoutBtn" onClick={() => auth.signOut()} type="button">
        {' '}
        Sign Out
      </button>
    )
  );
}

export default SignOut;
