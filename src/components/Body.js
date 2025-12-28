import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import GPT_App_Routes from "./Routes";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import Error from "./Error";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: GPT_App_Routes.home,
      element: <Login />,
    },
    {
      path: GPT_App_Routes.browse,
      element: <Browse />,
    },
    {
      path: GPT_App_Routes.error,
      element: <Error />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("logging user", user);
      if (user) {
        const { displayName, phoneNumber, photoURL, email, uid } = user;
        dispatch(
          addUser({ displayName, phoneNumber, photoURL, email, uid})
        );
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
