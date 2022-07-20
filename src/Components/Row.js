import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Movie from "./Movie";

function Row({ title, URL }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(URL).then((ress) => {
      setMovies(ress.data.results);
    });
  }, [URL]);

  console.log(movies);
  return (
    <>
      <h1 className="text-red-600 font-semibold flex text-2xl py-2">{title}</h1>

      {/* whitespace-nowrap => keeps all the images in one row , so now we can just manipulate the scroll behaviour ,NO NEED TO USE FLEXBOX */}
      <div className="w-full h-full overflow-x-scroll no-scrollbar whitespace-nowrap scroll-smooth scrollbar-hide relative space-x-4">
        {movies &&
          movies.map((item, id) => <Movie key={id} item={item} id={id} />)}
      </div>
    </>
  );
}

export default Row;
