import './App.css';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  connectAuthEmulator,
  AuthErrorCodes,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { getFirestore, setDoc, doc, getDoc, connectFirestoreEmulator } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import SignIn from './components/SignIn/SignIn';
import Chatroom from './components/Chatroom/Chatroom';

function App() {
  const firebaseConfig = {
    apiKey: 'AIzaSyB5TIKYS0o_XURgZf8ot_BgQ8SPtBNTE9A',
    authDomain: 'chatpack-d9c39.firebaseapp.com',
    projectId: 'chatpack-d9c39',
    storageBucket: 'chatpack-d9c39.appspot.com',
    messagingSenderId: '36648908277',
    appId: '1:36648908277:web:3a9b1882d7616236271cbc'
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header className="App-header" />
      <section>{user ? <Chatroom auth={auth} /> : <SignIn />}</section>
    </div>
  );
}

export default App;
