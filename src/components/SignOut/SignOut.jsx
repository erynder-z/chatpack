/* eslint-disable react/prop-types */
import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import './SignOut.css';

function SignOut(props) {
  const { auth } = props;
  return (
    auth.currentUser && (
      <button className="signoutBtn" onClick={() => auth.signOut()} type="button">
        {' '}
        <FiLogOut />
      </button>
    )
  );
}

export default SignOut;
