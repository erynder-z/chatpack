import './App.css';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getFirestore } from 'firebase/firestore';
import './components/SignIn/SignIn.css';
import { useEffect } from 'react';
import Chatroom from './components/Chatroom/Chatroom';
import SignIn from './components/SignIn/SignIn';
import Nav from './components/Nav/Nav';

const firebaseConfig = {
  apiKey: 'AIzaSyB5TIKYS0o_XURgZf8ot_BgQ8SPtBNTE9A',

  authDomain: 'chatpack-d9c39.firebaseapp.com',

  projectId: 'chatpack-d9c39',

  storageBucket: 'chatpack-d9c39.appspot.com',

  messagingSenderId: '36648908277',

  appId: '1:36648908277:web:3a9b1882d7616236271cbc'
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

/* connectAuthEmulator(auth, 'http://localhost:9099');
connectFirestoreEmulator(firestore, 'localhost', 8080); */

function App() {
  const [user] = useAuthState(auth);

  useEffect(() => {
    const viewport = document.querySelector('meta[name=viewport]');
    viewport.setAttribute('content', `${viewport.content}, height=${window.innerHeight}`);
  }, []);

  return (
    <div className="App">
      <header>
        <Nav auth={auth} />
      </header>
      <section>{user ? <Chatroom auth={auth} firestore={firestore} /> : <SignIn />}</section>
    </div>
  );
}

export default App;
