import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

function Row({ rowId, title, URL }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(URL).then((ress) => {
      setMovies(ress.data.results);
    });
  }, [URL]);

  console.log(movies);
  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <>
      <h1 className="text-white font-semibold flex text-2xl py-2">{title}</h1>

      {/* whitespace-nowrap => keeps all the images in one row , so now we can just manipulate the scroll behaviour ,NO NEED TO USE FLEXBOX */}
      <div className="flex relative">
        <FaChevronCircleLeft
          fill="#1e1e1e"
          size={40}
          onClick={slideLeft}
          className="absolute bg-slate-100 rounded-full top-[60px] z-10"
        />
        <div
          id={"slider" + rowId}
          className="w-full h-full overflow-x-scroll no-scrollbar whitespace-nowrap scroll-smooth scrollbar-hide space-x-4"
        >
          {movies &&
            movies.map((item, id) => <Movie key={id} item={item} id={id} />)}
        </div>
        <FaChevronCircleRight
          fill="#1e1e1e"
          size={40}
          onClick={slideRight}
          className="absolute right-0 bg-slate-100 rounded-full top-[60px] z-10"
        />
      </div>
    </>
  );
}

export default Row;
