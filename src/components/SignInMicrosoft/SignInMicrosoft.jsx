import React from 'react';
import { getAuth, signInWithPopup, OAuthProvider } from 'firebase/auth';
import { BsMicrosoft } from 'react-icons/bs';
import './SignInMicrosoft.css';

function SignInMicrosoft() {
  async function signInWithMicrosoft() {
    const provider = new OAuthProvider('microsoft.com');

    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = OAuthProvider.credentialFromResult(result);
        const { accessToken } = credential;
        const { idToken } = credential;
      })

      .catch((error) => {
        alert(`"Something went wrong: ${error}`);
      });
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
