const API_KEY = "ae58aaabcaeb9c0923ce98b22dd4b3f7";

const api = {
  fetchPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=2`,
  fetchHorror: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=horror&page=1&include_adult=false`,
  fetchUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
};

export default api;
