import React from 'react';
import { getAuth, signInWithPopup, TwitterAuthProvider } from 'firebase/auth';
import { AiOutlineTwitter } from 'react-icons/ai';
import './SignInTwitter.css';

function SignInTwitter() {
  async function signInWithTwitter() {
    const provider = new TwitterAuthProvider();

    await signInWithPopup(getAuth(), provider);
  }

  return (
    <button className="signinBtnTwitter" onClick={signInWithTwitter} type="button">
      <div className="signin-container">
        <div className="signin-text">Sign in with Twitter</div>
        <div className="divider" />
        <AiOutlineTwitter size="4rem" />
      </div>
    </button>
  );
}

export default SignInTwitter;
