import React from "react";
import api from "../api_handle";
import Row from "./Row";
function Lists() {
  return (
    <>
      <Row rowId={1} title="Trending Now" URL={api.getTrending} />
      {/* <Row rowID={2} title="Moives" URL={api.getMovieList} /> api call not working oe whatever */}
      <Row rowId={3} title="Now Popular" URL={api.getPopular} />
      <Row rowId={4} title="Top Rated" URL={api.getTopRated} />
      <Row rowId={5} title="Horror" URL={api.getHorror} />
      <Row rowId={6} title="Upcoming" URL={api.getUpcoming} />
    </>
  );
}

export default Lists;
