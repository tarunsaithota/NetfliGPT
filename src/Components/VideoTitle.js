import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-60 px-9 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='font-bold text-5xl w-1/4'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className=''>
            <button className='p-2 px-6 bg-white text-black text-l rounded-md hover:bg-opacity-40'>▶️ Play</button>
            <button className='p-2 mx-2 px-6 bg-gray-400 bg-opacity-80 text-white text-l rounded-md'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle