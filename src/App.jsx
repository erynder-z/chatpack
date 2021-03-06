import './App.css';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import Chatroom from './components/Chatroom/Chatroom';
import SignInGoogle from './components/SignInGoogle/SignInGoogle';
import Nav from './components/Nav/Nav';
import OnlineUsers from './components/OnlineUsers/OnlineUsers';
import SignInGithub from './components/SignIn Github/SignInGithub';
import SignInTwitter from './components/SignInTwitter/SignInTwitter';
import SignInMicrosoft from './components/SignInMicrosoft/SignInMicrosoft';
import UserInfo from './components/UserInfo/UserInfo';

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
/* 
connectAuthEmulator(auth, 'http://localhost:9099');
connectFirestoreEmulator(firestore, 'localhost', 8080); */

function App() {
  const [user] = useAuthState(auth);

  const userOnline = async () => {
    const { uid } = auth.currentUser;
    const { displayName } = auth.currentUser;

    await setDoc(doc(firestore, 'onlineUsers', uid), {
      uid,
      displayName
    });
  };

  if (user) {
    userOnline();
  }

  return (
    <div className="App">
      <header>
        <Nav auth={auth} firestore={firestore} />
        {user && <UserInfo auth={auth} firestore={firestore} />}
        {user && <OnlineUsers firestore={firestore} />}
      </header>
      <section>
        {user ? (
          <Chatroom auth={auth} firestore={firestore} />
        ) : (
          <>
            <SignInGoogle />
            <SignInGithub />
            <SignInTwitter />
            <SignInMicrosoft />
            <footer className="about">
              created by Erynder-Z || <a href="https://github.com/erynder-z">My GitHub</a>
            </footer>
          </>
        )}
      </section>
    </div>
  );
}

export default App;
