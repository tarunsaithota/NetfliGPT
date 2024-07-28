import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signUp, setSignUp] = useState(false);
  const toggleSignInSignUp = (e) => {
    e.preventDefault();
    setSignUp(!signUp);
  };
  const handleSignUp = (e) => {
    e.preventDefault();
  };
  const handleSignIn = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/e86a75da-ce78-4129-9e7d-c056f1c3363b/US-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_e46f05a7-c909-4aaf-9e3c-c832bbca606c_large.jpg"
          alt=""
        />
      </div>
      <form className="w-4/12 absolute p-12 bg-black my-40 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85">
        <h1 className="font-bold text-3xl py-4">
          {signUp ? "Sign Up" : "Sign In"}
        </h1>
        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-3 my-3 w-full bg-gray-800"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-3 w-full bg-gray-800"
        />
        {signUp && (
          <input
            type="password"
            placeholder="Set Password"
            className="p-3 my-3 w-full bg-gray-800"
          />
        )}
        <button className="p-3 my-5 bg-red-600 w-full rounded-md" onClick={signUp ? handleSignUp : handleSignIn}>
          {signUp ? "Sign Up" : "Sign In"}
        </button>

        <p className="pt-4" >
          {signUp
            ? <>Already have an account? <a href='' onClick={toggleSignInSignUp}> Sign In</a></>
            : <>New to Netflix? <a href='' onClick={toggleSignInSignUp}> Sign Up now</a></>}
        </p>
      </form>
    </>
  );
};

export default Login;
