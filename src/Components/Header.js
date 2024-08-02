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
      <div className="absolute px-5 py-2 bg-gradient-to-b from-black w-full z-50 flex justify-between">
        <img className="w-44"
          src={LOGO}
          alt="logo"
        />
      {userDetails && (
        <div className="flex p-4">
          {showGPTSearch && <select className="px-2 m-1.5 bg-gray-700 text-white rounded-lg" onChange={handleLangChange}>
            {SUPPORTED_LANGUAGES.map((lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          </select>}
          <button className=" text-white bg-red-700 rounded-lg m-2 px-2" onClick={handleGPTSearchButton}>{showGPTSearch ? 'Home' : 'GPT Search'}</button>
          <img className="w-10 h-10 " src={USER_LOGO} alt="user-logo"/>
          <div className='pl-4 text-white'>
            <p>Welcome {userDetails.email.split('@')[0]}</p>
            <button className=" font-bold" onClick={handleSignOut}> (Sign out)</button>
          </div>
        </div>
      )}
      </div>
    </>
  );
};

export default Header;
