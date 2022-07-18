import axios from "axios";
import React, { useEffect, useState } from "react";
import api from "../api_handle";
function Main() {
  const [trending, setTrending] = useState([]);
  const [banner, setBanner] = useState("");
  const getTrending = async () => {
    let data = await axios.get(api.getTrending);
    console.log(data.data.results);
    setTrending(data.data.results);
    setBanner(
      data.data.results[
        Math.floor([Math.random() * data.data.results.length - 1])
      ]
    );
    console.log(
      data.data.results[Math.random() * data.data.results.length - 1]
        .backdrop_path
    );
  };
  useEffect(() => {
    getTrending();
  }, []);

  return (
    <>
      {banner && (
        <div>
          <div className="w-full h-[350px]">
            <div className="absolute w-full h-[450px] bg-gradient-to-r from-black"></div>
            <img
              className="w-full h-[450px] object-cover z-500"
              src={`https://image.tmdb.org/t/p/original/${banner?.backdrop_path}`}
              alt={banner?.title}
            />
          </div>
          <div className="absolute top-[30%] px-14 text-white">
            <div className="text-4xl py-2">{banner?.title}</div>
            <div className="text-sm text-slate-700 py-4">
              Released on {banner?.release_date}
            </div>
            <div className="text-sm text-slate-500 py-2">
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
        </div>
      )}
    </>
  );
}

export default Main;
