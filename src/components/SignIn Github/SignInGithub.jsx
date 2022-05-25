/* eslint-disable no-unused-vars */
import React from 'react';
import { getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import { AiOutlineGithub } from 'react-icons/ai';
import './SignInGithub.css';

function SignInGithub() {
  async function signInWithGithub() {
    const provider = new GithubAuthProvider();

    const auth = getAuth();
    await signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const { user } = result;
      })
      .catch((error) => {
        alert(`Something went wrong: ${error.message}`);
        const errorCode = error.code;
        const errorMessage = error.message;

        const { email } = error.customData;

        const credential = GithubAuthProvider.credentialFromError(error);
      });
  }

  return (
    <button className="signinBtnGithub" onClick={signInWithGithub} type="button">
      <div className="signin-container">
        <div className="signin-text">Sign in with GitHub</div>
        <div className="divider" />
        <AiOutlineGithub size="4rem" />
      </div>
    </button>
  );
}

export default SignInGithub;
