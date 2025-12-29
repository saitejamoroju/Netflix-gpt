
import Header from "./Header";

import { useNavigate } from "react-router-dom";
import GPT_App_Routes from "./Routes";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import usePlayingMoviesData from "../hooks/usePlayingMovies";
import MainContainer from "./Movies/MainContainer";
import SecondaryContainer from "./MovieSuggestions/SecondaryContainer";

const Browse = () => {
  const navigate = useNavigate();

  const handleSignOutClick = () => {
    signOut(auth)
      .then(() => {
        navigate(GPT_App_Routes.home);
      }) 
      .catch((error) => {
        navigate(GPT_App_Routes.error);
      });
  };
  usePlayingMoviesData();

  return (
    <div>
      <Header isSignOut={true} onClick={handleSignOutClick} />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
