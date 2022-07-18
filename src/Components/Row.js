import React, { useState, useEffect } from "react";
import axios from "axios";

function Row({ title, URL }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(URL).then((ress) => {
      setMovies(ress.data.results);
    });
  }, [URL]);

  console.log(movies);
  return (
    <div className="ml-2">
      <h1 className="text-red-600 font-semibold text-2xl py-2">{title}</h1>
      <div className="flex overflow-y-auto no-scrollbar space-x-4 mb-6">
        {movies &&
          movies.map((item, id) => (
            <img
              className="h-[150px] w-[300px]"
              src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
              alt={item.title}
            />
          ))}
      </div>
    </div>
  );
}

export default Row;
