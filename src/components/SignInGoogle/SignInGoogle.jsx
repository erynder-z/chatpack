import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { AiOutlineGoogle } from 'react-icons/ai';
import './SignInGoogle.css';

function SignInGoogle() {
  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
  }
  return (
    <button className="signinBtnGoogle" onClick={signInWithGoogle} type="button">
      <div className="signin-container">
        <div className="signin-text">Sign in with Google</div>
        <div className="divider" />
        <AiOutlineGoogle size="4rem" />
      </div>
    </button>
  );
}

export default SignInGoogle;
