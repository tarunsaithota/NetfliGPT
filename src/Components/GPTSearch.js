import React from 'react'
import GPTSearchBar from './GPTSearchBar';
import GPTMovieSuggestions from './GPTMovieSuggestions';
import { BG_IMG_URL } from '../Utils/Constants';

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute w-full h-full -z-10 opacity-60">
        <img
          src={BG_IMG_URL}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  )
}

export default GPTSearch;