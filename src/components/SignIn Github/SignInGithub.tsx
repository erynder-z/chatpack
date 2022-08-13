import React, { FC } from 'react';
import { getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import { AiOutlineGithub } from 'react-icons/ai';
import './SignInGithub.css';

const SignInGithub: FC = () => {
  async function signInWithGithub() {
    const provider = new GithubAuthProvider();

    const auth = getAuth();
    await signInWithPopup(auth, provider)
      .then((result) => {
        GithubAuthProvider.credentialFromResult(result);
      })
      .catch((error) => {
        alert(`Something went wrong: ${error.message}`);
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
};

export default SignInGithub;
