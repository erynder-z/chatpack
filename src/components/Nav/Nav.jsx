/* eslint-disable react/prop-types */
import './Nav.css';
import { BsChatDots } from 'react-icons/bs';
import SignOut from '../SignOut/SignOut';

function Nav({ auth }) {
  return (
    <div className="navbar">
      <h1>
        Chatpack <BsChatDots />
      </h1>
      <SignOut auth={auth} />
    </div>
  );
}

export default Nav;
