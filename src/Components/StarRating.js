import React, { useState } from "react";
import { useSelector } from "react-redux";

const StarRating = () => {
  const movieInfo = useSelector((store) => store.movies.movieInfo);
  const startCount = Math.round(movieInfo?.vote_average / 2);
  return (
    <div className="">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={index+1 <= startCount ? "text-yellow-600" : "text-slate-700"}
        >
          {index+1 <= startCount ? <>&#9733;</> : <>&#9734;</>}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
