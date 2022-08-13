import './Nav.css';
import { BiRocket } from 'react-icons/bi';
import SignOut from '../SignOut/SignOut';
import { Auth } from 'firebase/auth';
import { Firestore } from 'firebase/firestore';
import { FC } from 'react';

interface Props {
  auth: Auth;
  firestore: Firestore;
}

const Nav: FC<Props> = ({ auth, firestore }) => {
  return (
    <div className="navbar">
      <h1>
        Chatpack <BiRocket />
      </h1>
      <SignOut auth={auth} firestore={firestore} />
    </div>
  );
};

export default Nav;
