import './App.css';
import { FC } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { firebaseConfig } from './data/firebase';
import Chatroom from './components/Chatroom/Chatroom';
import SignInGoogle from './components/SignInGoogle/SignInGoogle';
import Nav from './components/Nav/Nav';
import OnlineUsers from './components/OnlineUsers/OnlineUsers';
import SignInGithub from './components/SignIn Github/SignInGithub';
import SignInTwitter from './components/SignInTwitter/SignInTwitter';
import SignInMicrosoft from './components/SignInMicrosoft/SignInMicrosoft';
import UserInfo from './components/UserInfo/UserInfo';

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

const App: FC = () => {
  const [user] = useAuthState(auth);

  const userOnline = async () => {
    if (user) {
      const { uid } = user;
      const { displayName } = user;

      await setDoc(doc(firestore, 'onlineUsers', uid), {
        uid,
        displayName
      });
    }
  };

  if (user) {
    userOnline();
  }

  return (
    <div className="App">
      <header>
        <Nav auth={auth} firestore={firestore} />
        {user && <UserInfo auth={auth} />}
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
};

export default App;
