const key = process.env.REACT_APP_DP_API_KEY;
const api = {
  getMovieList: `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`,
  getTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
  imageBase: `https://image.tmdb.org/t/p/w500/`,
  getPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  getTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  getHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
  getUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};
export default api;
// const key = process.env.REACT_APP_IMDB_API_KEY

// const requests = {
// requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
// requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
// requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
// requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
// requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
// };

//   export default requests;
