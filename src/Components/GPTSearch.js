import React from 'react'
import GPTSearchBar from './GPTSearchBar';
import GPTMovieSuggestions from './GPTMovieSuggestions';
import { BG_IMG_URL } from '../Utils/Constants';

const GPTSearch = () => {
  return (
    <>
    <div className="fixed -z-10 opacity-90">
        <img
          src={BG_IMG_URL}
          alt=""
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