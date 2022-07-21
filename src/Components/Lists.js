import React from "react";
import api from "../api_handle";
import Row from "./Row";
function Lists() {
  return (
    <>
      <Row rowID={1} title="Trending Now" URL={api.getTrending} />
      {/* <Row rowID={2} title="Moives" URL={api.getMovieList} /> api call not working oe whatever */}
      <Row rowID={3} title="Now Popular" URL={api.getPopular} />
      <Row rowID={4} title="Top Rated" URL={api.getTopRated} />
      <Row rowID={5} title="Horror" URL={api.getHorror} />
      <Row rowID={6} title="Upcoming" URL={api.getUpcoming} />
    </>
  );
}

export default Lists;
