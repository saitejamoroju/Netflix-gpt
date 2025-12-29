import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground';
const MainContainer = () => {
  const Movies=useSelector(state=>state.movies?.playingMovies);
  if(!Movies) return;
  const displayMovie=Movies[4];
  const {id:movieId}=displayMovie;
  return (
    <>
    <VideoTitle data={displayMovie}/>
    <VideoBackground movieId={movieId}/>
    </>
  )
}

export default MainContainer