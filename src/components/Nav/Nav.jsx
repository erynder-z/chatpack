/* eslint-disable react/prop-types */
import './Nav.css';
import { BiRocket } from 'react-icons/bi';
import SignOut from '../SignOut/SignOut';

function Nav({ auth, firestore }) {
  return (
    <div className="navbar">
      <h1>
        Chatpack <BiRocket />
      </h1>
      <SignOut auth={auth} firestore={firestore} />
    </div>
  );
}

export default Nav;
