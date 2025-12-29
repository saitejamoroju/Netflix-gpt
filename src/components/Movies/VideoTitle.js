import React from "react";

const VideoTitle = ({ data }) => {
  const { title, overview } = data;
  return (
    <div className="w-screen aspect-video pt-[20%] py-12 px-12 absolute text-white bg-gradient-to-r from-black">
      
        <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white p-2 px-14 rounded-lg text-black font-bold hover:opacity-80">

          ▶ Play
        </button>
        <button className="bg-white mx-2 p-2 px-14 rounded-lg text-black font-bold hover:opacity-30" >
    
          More Info
        </button>
      </div>
     
    </div>
  );
};

export default VideoTitle;
