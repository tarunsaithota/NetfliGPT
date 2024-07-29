import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store)=> store.user);
  const handleSignOut = (e) => {
    e.preventDefault();
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
      navigate('/errorPage')
    });
  }
  return (
      <><div className="absolute px-5 py-2 bg-gradient-to-b from-black w-full z-50 flex justify-between">
        <img className="w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      {user && (<div className="flex p-4">
        <img className="w-10 h-10 "
         src='https://occ-0-1480-1479.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABeuqjuQsRgqEDlibtJTI5BMf8IxhLlLOeIT6xI4TL57mqv7XHja43gx02S8pZVe8JNGRQXjnrUk1VcsTXqi83tFKPI6OR3k.png?r=bd7' alt="user-logo"/>
        <div className='pl-4 text-white'>
          <p>Welcome {user.email.split('@')[0]}</p>
          <button className=" font-bold" onClick={handleSignOut}> (Sign out)</button>
        </div>
        
      </div>)}
    </div>
    </>
  );
};

export default Header;
