import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../../constants";

const VideoBackground = ({ movieId }) => {
  const [trailerId, setTrailerId] = useState(null);
  const displayMovieData = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const response = await data.json();
    const filterData = response.results.filter(
      (video) => video.type === "Trailer"
    );
    const { key } = filterData[0];
    setTrailerId(key);
  };
  useEffect(() => {
    displayMovieData();
  }, []);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerId}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
