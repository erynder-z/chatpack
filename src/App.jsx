import './App.css';
import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import './components/SignIn/SignIn.css';
import Chatroom from './components/Chatroom/Chatroom';
import SignIn from './components/SignIn/SignIn';
import SignOut from './components/SignOut/SignOut';

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

connectAuthEmulator(auth, 'http://localhost:9099');
connectFirestoreEmulator(firestore, 'localhost', 8080);

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chatpack</h1>
        <SignOut auth={auth} />
      </header>
      <section>{user ? <Chatroom auth={auth} firestore={firestore} /> : <SignIn />}</section>
    </div>
  );
}

export default App;
