import React from 'react'

const VideoTitle = ({title, overview, mute, handleSound}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] pl-6 md:pl-9 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='font-bold text-lg md:text-4xl w-1/4'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-sm w-1/4'>{overview}</p>
        <div className=''>
            <button className='p-1 px-3 md:px-6 bg-white text-black text-l rounded-md hover:bg-opacity-40'> Play</button>
            <button className='hidden md:inline-block p-1 mx-2 px-6 bg-gray-400 bg-opacity-80 text-white text-l rounded-md'>More Info</button>
            <button onClick={handleSound} className='text-2xl '> {mute ? '🔇' : '🔊'}</button>
        </div>
    </div>
  )
}

export default VideoTitle;