import axios from "axios";
import React, { useEffect, useState } from "react";
import api from "../api_handle";
import Lists from "./Lists";
import Row from "./Row";
function Main() {
  const [trending, setTrending] = useState([]);
  const [banner, setBanner] = useState("");
  const getTrending = async () => {
    let data = await axios.get(api.getTrending);
    // console.log(data.data.results);
    setTrending(data.data.results);
    setBanner(
      data.data.results[
        Math.floor([Math.random() * data.data.results.length - 1])
      ]
    );
  };
  useEffect(() => {
    getTrending();
  }, []);

  return (
    <>
      {banner && (
        <>
          <div className=" w-full h-[450px]">
            <img
              className="w-full h-[450px]  object-cover"
              src={`https://image.tmdb.org/t/p/original/${banner?.backdrop_path}`}
              alt={banner?.title}
            />
            <div className="absolute top-[60px] left-0 w-full h-[450px] bg-gradient-to-r bg-transparent from-gray-900"></div>
          </div>
          <div className="absolute top-[30%] px-14 text-white bg-transparent">
            <div className="text-4xl text-white py-2 bg-transparent">
              {banner?.title}
            </div>
            <div className="text-sm bg-transparent text-slate-700 py-4">
              Released on {banner?.release_date}
            </div>
            <div className="text-sm bg-transparent text-slate-500 py-2">
              {banner?.overview.slice(0, 150)}...
            </div>
            <button className="px-4 mt-2 py-2 mr-4 rounded bg-red-600">
              Watch
            </button>
            <button
              onClick={() => {
                alert("Added to your watchlist");
              }}
              className=" border px-4 py-2 rounded bg-white-600 text-red-600"
            >
              Add to watchlist
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Main;
