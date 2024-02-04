const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  fetchTrending: `trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchPopular: `movie/popular?api_key=${API_KEY}&language=en-US`,
  fetchUpcoming: `movie/upcoming?api_key=${API_KEY}&language=en-US`,
  fetchNowPlaying: `movie/now_playing?api_key=${API_KEY}&language=en-US`,
  fetchTrendingTv: `trending/tv/week?api_key=${API_KEY}&language=en-US`,
  fetchTrendingMovies: `trending/movie/week?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
};

export default requests;
