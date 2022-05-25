import React from 'react';
import { getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import { AiOutlineGithub } from 'react-icons/ai';
import './SignInGithub.css';

function SignInGithub() {
  async function signInWithGithub() {
    const provider = new GithubAuthProvider();

    await signInWithPopup(getAuth(), provider);
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
