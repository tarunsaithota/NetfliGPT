import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateForm } from "../Utils/validateForm";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const setPasswordRef = useRef(null);
  const [signUp, setSignUp] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    setPassword: ''
  })
  const toggleSignInSignUp = (e) => {
    e.preventDefault();
    setSignUp(!signUp);
    setErrors({
        email: '',
        password: '',
        setPassword: ''
      })
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const setPassword = setPasswordRef.current.value;
    const validateSignUpErrors = validateForm(email, password, setPassword);
    setErrors(validateSignUpErrors);
    if (errors.length == 0) {
        console.log('Form submitted completely');
    }
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
          ref = {emailRef}
          className="p-3 my-3 w-full bg-gray-800"
        />
        {errors.email && <p className="text-red-600">{errors.email}</p>}
        <input
          type="password"
          ref ={passwordRef}
          placeholder="Password"
          className="p-3 my-3 w-full bg-gray-800"
        />
        {errors.password && <p className="text-red-600">{errors.password}</p>}
        {signUp && (
          <input
            type="password"
            ref ={setPasswordRef}
            placeholder="Confirm Password"
            className="p-3 my-3 w-full bg-gray-800"
          />
        )}
        {errors.setPassword && <p className="text-red-600">{errors.setPassword}</p>}
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
