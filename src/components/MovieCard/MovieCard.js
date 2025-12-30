import React from 'react'
import { MOVIE_CARD_URL } from '../../constants'

const MovieCard = ({cardData}) => {
  const imgPath=cardData?.poster_path;
  return (
    <div className='w-48'>
   <img src={`${MOVIE_CARD_URL}${imgPath}`} alt="Movie image" />
   </div>
  )
}

export default MovieCard