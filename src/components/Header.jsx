import React, { useEffect } from "react";
  import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import GPT_App_Routes from "./Routes";




const Header = ({ isSignOut, onClick }) => {
const dispatch=useDispatch();
const navigate=useNavigate();


  useEffect(() => {
    const subscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, phoneNumber, photoURL, email, uid } = user;
        dispatch(
          addUser({ displayName, phoneNumber, photoURL, email, uid})
        );
         navigate(GPT_App_Routes.browse);
      } else {
        dispatch(removeUser());
        navigate(GPT_App_Routes.home);
      }
    });
    // unsubscribe when component unmounts 
    return ()=> subscribe();
  }, []);

  
  return (
    <div className="w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between">
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt=""
      />
      {isSignOut && (
        <button
          onClick={onClick}
          className="bg-red-600 text-white p-2 m-4 rounded-lg"
        >
          Sign out
        </button>
      )}
    </div>
  );
};

export default Header;
