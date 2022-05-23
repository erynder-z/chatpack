/* eslint-disable react/prop-types */
import './Nav.css';
import { BsChatDots } from 'react-icons/bs';
import SignOut from '../SignOut/SignOut';
import UserInfo from '../UserInfo/UserInfo';

function Nav({ auth }) {
  return (
    <div className="navbar">
      <h1>
        Chatpack <BsChatDots />
      </h1>
      <UserInfo auth={auth} />
      <SignOut auth={auth} />
    </div>
  );
}

export default Nav;
