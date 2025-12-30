import React from "react";
import MovieList from "../MovieList/MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const moviesData = useSelector((state) => state?.movies?.playingMovies);

  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-20">
        <MovieList data={moviesData} />
        <MovieList data={moviesData} />
        <MovieList data={moviesData} />
        <MovieList data={moviesData} />
        <MovieList data={moviesData} />
        <MovieList data={moviesData} />
        <MovieList data={moviesData} />
        <MovieList data={moviesData} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
//https://image.tmdb.org/t/p/w300/g96wHxU7EnoIFwemb2RgohIXrgW.jpg
