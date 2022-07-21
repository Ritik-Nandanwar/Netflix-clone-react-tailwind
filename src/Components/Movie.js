import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function Movie({ item, id }) {
  const [like, setLike] = useState(false);
  return (
    <>
      <div className="relative inline-block w-[350px] h-[200px]">
        <img
          className=" h-auto w-full block"
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item?.title}
        />
        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
          <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center text-white">
            {item?.title}
          </p>
          <p
            className="text-white"
            onClick={() => {
              setLike(!like);
            }}
          >
            {like ? (
              <FaHeart className="absolute top-4 left-4" fill="#fff" />
            ) : (
              <FaRegHeart fill="#fff" className="absolute top-4 left-4" />
            )}
          </p>
        </div>
      </div>
    </>
  );
}

export default Movie;
