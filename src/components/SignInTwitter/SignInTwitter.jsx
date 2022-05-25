/* eslint-disable no-unused-vars */
import React from 'react';
import { getAuth, signInWithPopup, TwitterAuthProvider } from 'firebase/auth';
import { AiOutlineTwitter } from 'react-icons/ai';
import './SignInTwitter.css';

function SignInTwitter() {
  async function signInWithTwitter() {
    const provider = new TwitterAuthProvider();

    const auth = getAuth();
    await signInWithPopup(auth, provider)
      .then((result) => {
        const credential = TwitterAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const { secret } = credential;

        const { user } = result;
      })
      .catch((error) => {
        alert(`Something went wrong: ${error.message}`);
        const errorCode = error.code;
        const errorMessage = error.message;

        const { email } = error.customData;

        const credential = TwitterAuthProvider.credentialFromError(error);
      });
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
