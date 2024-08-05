import React, { useRef } from 'react';
import lang from '../Utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import { GEMINI_API_KEY, options } from '../Utils/Constants';
import { addGPTMovieList } from '../Utils/GPTSlice';
import { GoogleGenerativeAI } from "@google/generative-ai";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
    const langKey = useSelector((store)=> store.config.lang);
    const inputRef = useRef(null);
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    console.log(GEMINI_API_KEY, genAI);
    const handleSearchButton = async(e) => {
        e.preventDefault();
        const gptQuery = "Act as a movie recommendation system and suggest some movies for the query" + inputRef.current.value + ". only give me names of five movies, comma seperatedlike the example result given ahead. Example result : Gadar, sholay, Don, Bahubali, Pushpa"
        const model = genAI.getGenerativeModel({ model: "gemini-pro"});
        const result = await model.generateContent(gptQuery);
        const gptResults = result.response;
        const gptMovies=gptResults.candidates?.[0]?.content?.parts?.[0]?.text.split(",");
        const promiseData =  gptMovies.map((movie) => fetchMovie(movie));
        const movieData = await Promise.all(promiseData);
        dispatch(addGPTMovieList({showMovies : movieData, showMovieNames: gptMovies}));
    }
    const fetchMovie = async(movieName) => {
        const result = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movieName + '&include_adult=false&language=en-US&page=1', options);
        const moviesResult = await result.json();
        return moviesResult.results;
    }
  return (
    <div className='bg-gradient-to-b from-black'>
        <center className='pt-[40%] md:pt-[10%]'>
        <h1 className='font-bold text-2xl md:text-5xl pb-[3%] text-white'>Movies GPT 🔍</h1>
        <form className=''>
            <input type='text' ref={inputRef} className='w-7/12 md:w-4/12 h-10 px-4 bg-white text-black rounded-3xl' placeholder={lang[langKey].gptSearchPlaceHolder}/>&nbsp;
            <button className='bg-red-600 text-white rounded-lg px-4 py-1' onClick={handleSearchButton}>{lang[langKey].search}</button>
        </form>
        </center>
    </div>
  )
}

export default GPTSearchBar;