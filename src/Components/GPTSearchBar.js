import React from 'react';
import lang from '../Utils/languageConstants';
import { useSelector } from 'react-redux';

const GPTSearchBar = () => {
    const langKey = useSelector((store)=> store.config.lang);
  return (
    <div className='bg-gradient-to-b from-black'>
        <center className='pt-[10%]'>
        <h1 className='font-bold text-5xl pb-[3%] text-white'>NETFLIX GPT 🔍</h1>
        <form className=''>
            <input type='text' className='w-4/12 h-10 px-4 bg-white text-black rounded-3xl' placeholder={lang[langKey].gptSearchPlaceHolder}/>&nbsp;
            <button className='bg-red-600 text-white rounded-lg px-4 py-1'>{lang[langKey].search}</button>
        </form>
        </center>
    </div>
  )
}

export default GPTSearchBar;