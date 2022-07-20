import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Movie from "./Movie";

function Row({ title, URL }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(URL).then((ress) => {
      setMovies(ress.data.results.splice(0, 5));
    });
  }, [URL]);

  console.log(movies);
  return (
    <div className="ml-2">
      <h1 className="text-red-600 font-semibold text-2xl py-2">{title}</h1>
      <div className="flex item-center relative">
        <div className="flex w-full h-full  space-x-4 scroll-smooth scrollbar-hide ">
          {movies &&
            movies.map((item, id) => <Movie key={id} item={item} id={id} />)}
        </div>
      </div>
    </div>
  );
}

export default Row;
