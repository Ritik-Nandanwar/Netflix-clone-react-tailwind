import React from "react";
import api from "../api_handle";
import Row from "./Row";
function Lists() {
  return (
    <>
      <Row title="Trending Now" URL={api.getTrending} />
      <Row title="Moives" URL={api.getMovieList} />
      <Row title="Now Popular" URL={api.getPopular} />
      <Row title="Top Rated" URL={api.getTopRated} />
      <Row title="Horror" URL={api.getHorror} />
      <Row title="Upcoming" URL={api.getUpcoming} />
    </>
  );
}

export default Lists;
