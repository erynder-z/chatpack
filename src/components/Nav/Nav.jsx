/* eslint-disable react/prop-types */
import './Nav.css';
import { BiRocket } from 'react-icons/bi';
import SignOut from '../SignOut/SignOut';
import UserInfo from '../UserInfo/UserInfo';

function Nav({ auth, firestore }) {
  return (
    <div className="navbar">
      <h1>
        Chatpack <BiRocket />
      </h1>
      <UserInfo auth={auth} firestore={firestore} />
      <SignOut auth={auth} firestore={firestore} />
    </div>
  );
}

export default Nav;
