import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validation";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const userName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  function handleSignUpfunc() {
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("inside signup", user);
        handleUpdateUser();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  }

  function handleSignInFunc() {
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  }

  function handleUpdateUser() {
    console.log("loggin inside func");

    updateProfile(auth.currentUser, {
      displayName: userName.current.value,
      phoneNumber: "987654321",
      photoURL: "Empty",
    })
      .then(() => {
        const { displayName, phoneNumber, photoURL, email, uid } =
          auth.currentUser;
        console.log("logging ", displayName, phoneNumber, photoURL);
        dispatch(addUser({ displayName, phoneNumber, photoURL, email, uid }));
        console.log("logging inside then");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log("Logging the error", error.message);
        setErrorMessage(errorMessage);
      });
  }

  const handleSignUp = () => {
    setIsSignIn(!isSignIn);
  };

  const handlesubmitClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!isSignIn) {
      handleSignUpfunc();
    } else {
      handleSignInFunc();
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9ddb442a-aca7-4d85-9cd1-dbed62f18f26/web/IN-en-20251222-TRIFECTA-perspective_a882efaa-75c8-4143-9dc1-4f9932a791ac_large.jpg"
          alt="logo"
          className="bg-opacity-30"
        />
      </div>
      <form
        action=""
        className="w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 bg-black text-white bg-opacity-80 rounded-t-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl p-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={userName}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full rounded-lg text-black"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full rounded-lg text-black"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full
        rounded-lg text-black"
        />
        {errorMessage && (
          <p className="text-red-600 font-bold text-sm">{errorMessage}</p>
        )}
        <button
          className="w-full p-4 my-4 bg-red-700 rounded-lg"
          onClick={handlesubmitClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-white p-4 cursor-pointer" onClick={handleSignUp}>
          New to Netflix? Sign Up Now
        </p>
      </form>
    </div>
  );
};

export default Login;
