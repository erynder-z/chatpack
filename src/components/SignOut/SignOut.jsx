/* eslint-disable react/prop-types */
import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import './SignOut.css';

function SignOut({ auth }) {
  return (
    auth.currentUser && (
      <button className="signoutBtn" onClick={() => auth.signOut()} type="button">
        {' '}
        <FiLogOut size="1.5rem" />
      </button>
    )
  );
}

export default SignOut;
