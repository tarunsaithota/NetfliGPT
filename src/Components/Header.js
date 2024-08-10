import React from "react";
import { useDispatch } from 'react-redux';
import { SUPPORTED_LANGUAGES } from "../Utils/Constants";
import { toggleGPTSearch } from "../Utils/GPTSlice";
import { changelanguage } from "../Utils/configSlice";

const Header = ({showGPTSearch}) => {
  const dispatch = useDispatch();
  const handleGPTSearchButton = () => {
    dispatch(toggleGPTSearch());
  }
  const handleLangChange = (e) => {
    e.preventDefault();
    dispatch(changelanguage(e.target.value));
  }
  return (
      <>
      <div className="absolute md:px-5 py-2 bg-gradient-to-b from-black w-full z-50 flex justify-between">
        <h1 className="text-2xl md:text-4xl font-extrabold text-white pl-4 md:pl-0 pt-1 md:pt-3 md:mx-0">CineSearch AI</h1>
        <div className="flex p-2 md:p-4 justify-center md:justify-end">
          {showGPTSearch && <select className=" md:px-2 m-1 md:m-1.5 bg-gray-700 text-white rounded-lg text-xs md:text-lg" onChange={handleLangChange}>
            {SUPPORTED_LANGUAGES.map((lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          </select>}
          <button className="text-white bg-red-700 rounded-lg md:px-2 m-1 px-2 md:m-1.5 py-1 text-xs md:text-lg" onClick={handleGPTSearchButton}>{showGPTSearch ? 'Home' : 'GPT Search'}</button>
        </div>
      </div>
    </>
  );
};

export default Header;
