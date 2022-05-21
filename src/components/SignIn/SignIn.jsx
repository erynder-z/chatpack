import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import './SignIn.css';

function SignIn() {
  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
  }
  return (
    <button className="signinBtn" onClick={signInWithGoogle} type="button">
      Sign in with Google
    </button>
  );
}

export default SignIn;
