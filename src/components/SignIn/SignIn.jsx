import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { AiOutlineGoogle } from 'react-icons/ai';
import './SignIn.css';

function SignIn() {
  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
  }
  return (
    <button className="signinBtn" onClick={signInWithGoogle} type="button">
      <div className="signin-container">
        <div className="signin-text">Sign in</div>
        <div className="divider" />
        <AiOutlineGoogle />
      </div>
    </button>
  );
}

export default SignIn;
