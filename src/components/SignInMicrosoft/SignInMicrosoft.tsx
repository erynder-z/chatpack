import React, { FC } from 'react';
import { getAuth, signInWithPopup, OAuthProvider } from 'firebase/auth';
import { BsMicrosoft } from 'react-icons/bs';
import './SignInMicrosoft.css';

const SignInMicrosoft: FC = () => {
  async function signInWithMicrosoft() {
    const provider = new OAuthProvider('microsoft.com');

    const auth = getAuth();
    await signInWithPopup(auth, provider)
      .then((result) => {
        OAuthProvider.credentialFromResult(result);
      })
      .catch((error) => {
        alert(`"Something went wrong: ${error}`);
      });
  }

  return (
    <button className="signinBtnMicrosoft" onClick={signInWithMicrosoft} type="button">
      <div className="signin-container">
        <div className="signin-text">Sign in with Microsoft</div>
        <div className="divider" />
        <BsMicrosoft size="4rem" />
      </div>
    </button>
  );
};

export default SignInMicrosoft;
