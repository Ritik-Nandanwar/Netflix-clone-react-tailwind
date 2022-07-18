const KEY = "734c9d37368ab6ed430d8fbde3d0fd90";
const api = {
  getMovieList: `https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}&language=en-US`,
  getTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`,
  imageBase: `https://image.tmdb.org/t/p/w500/`,
};
export default api;
