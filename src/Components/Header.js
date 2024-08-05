import React, {useEffect} from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from '../Utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES, USER_LOGO } from "../Utils/Constants";
import { toggleGPTSearch } from "../Utils/GPTSlice";
import { changelanguage } from "../Utils/configSlice";
import Netflix_Logo_PMS from "../Utils/Netflix_Logo_PMS.png";
import User_Logo from "../Utils/USER_LOGO.png";

const Header = ({showGPTSearch}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetails = useSelector((store)=> store.user);
  const handleSignOut = (e) => {
    e.preventDefault();
    signOut(auth).then(() => {}).catch((error) => {
      navigate('/errorPage')
    });
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
  }, []);
  const handleGPTSearchButton = () => {
    dispatch(toggleGPTSearch());
  }
  const handleLangChange = (e) => {
    e.preventDefault();
    dispatch(changelanguage(e.target.value));
  }
  return (
      <>
      <div className="absolute px-5 py-2 bg-gradient-to-b from-black w-full z-50 flex flex-col md:flex-row justify-between">
        <img className="w-44 mx-auto md:mx-0"
          src={Netflix_Logo_PMS}
          alt="logo"
        />
      {userDetails && (
        <div className="flex p-2 md:p-4 justify-end">
          {showGPTSearch && <select className=" md:px-2 m-1 md:m-1.5 bg-gray-700 text-white rounded-lg" onChange={handleLangChange}>
            {SUPPORTED_LANGUAGES.map((lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          </select>}
          <button className=" text-white bg-red-700 rounded-lg md:px-2 m-1 px-1 md:m-1.5" onClick={handleGPTSearchButton}>{showGPTSearch ? 'Home' : 'GPT Search'}</button>
          <img className="hidden md:inline-block w-8 h-8 my-2" src={User_Logo} alt="user-logo"/>
          <div className='pl-4 text-white'>
            <p>Welcome {userDetails.email.split('@')[0]}</p>
            <button className="font-bold text-sm" onClick={handleSignOut}> (Sign out)</button>
          </div>
        </div>
      )}
      </div>
    </>
  );
};

export default Header;
