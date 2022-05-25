import React from 'react';
import { getAuth, signInWithPopup, OAuthProvider } from 'firebase/auth';
import { BsMicrosoft } from 'react-icons/bs';
import './SignInMicrosoft.css';

function SignInMicrosoft() {
  async function signInWithMicrosoft() {
    const provider = new OAuthProvider('microsoft.com');

    await signInWithPopup(getAuth(), provider);
  }

  return (
    <button className="signinBtnTwitter" onClick={signInWithMicrosoft} type="button">
      <div className="signin-container">
        <div className="signin-text">Sign in with Microsoft</div>
        <div className="divider" />
        <BsMicrosoft size="4rem" />
      </div>
    </button>
  );
}

export default SignInMicrosoft;
