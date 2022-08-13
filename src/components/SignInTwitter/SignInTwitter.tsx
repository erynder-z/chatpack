import React, { FC } from 'react';
import { getAuth, signInWithPopup, TwitterAuthProvider } from 'firebase/auth';
import { AiOutlineTwitter } from 'react-icons/ai';
import './SignInTwitter.css';

const SignInTwitter: FC = () => {
  async function signInWithTwitter() {
    const provider = new TwitterAuthProvider();

    const auth = getAuth();
    await signInWithPopup(auth, provider)
      .then((result) => {
        TwitterAuthProvider.credentialFromResult(result);
      })
      .catch((error) => {
        alert(`Something went wrong: ${error.message}`);
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
};

export default SignInTwitter;
