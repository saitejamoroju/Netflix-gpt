import React from "react";
import Header from "./Header";

import { useNavigate } from "react-router-dom";
import GPT_App_Routes from "./Routes";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Browse = () => {
  const navigate = useNavigate();
  const handleSignOutClick = () => {
    signOut(auth)
      .then(() => {
        navigate(GPT_App_Routes.home);
      })
      .catch((error) => {
        navigate(GPT_App_Routes.error)
      });
  };
  return (
    <div>
      <Header isSignOut={true} onClick={handleSignOutClick} />
    </div>
  );
};

export default Browse;
