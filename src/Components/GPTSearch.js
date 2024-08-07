import React from 'react'
import GPTSearchBar from './GPTSearchBar';
import GPTMovieSuggestions from './GPTMovieSuggestions';
import BG_IMG from "../Utils/BG_IMG.jpg";

const GPTSearch = () => {
  return (
    <>
    <div className="fixed -z-10 opacity-60">
        <img
          src={BG_IMG}
          alt="image"
          className="w-screen h-screen object-cover"
        />
      </div>
      <div className=''>
        <GPTSearchBar />
        <GPTMovieSuggestions />
    </div>
    </>
    
  )
}

export default GPTSearch;