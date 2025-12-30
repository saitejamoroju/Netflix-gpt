import React from 'react'
import MovieCard from '../MovieCard/MovieCard'

const MovieList = ({data}) => {
  const title="Avatar"
  return (
    <div className='px-6'>
      <h1 className='text-3xl py-3 text-white'>{title}</h1>
    <div className='flex overflow-x-scroll'>
      <div className="flex gap-2">
           {data?.map((item)=>(
            <MovieCard cardData={item}/>
           ))}

      </div>
    </div>
    </div>
  )
}

export default MovieList