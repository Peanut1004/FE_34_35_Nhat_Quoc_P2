import axiosClient from "./axiosClient";

const moviesApi = {
  getMovies: () => {
    const url = "/movies";
    return axiosClient.get(url);
  },

  getMovieList: () => {
    const url = "/movies?_page=1&_limit=4";
    return axiosClient.get(url);
  },

  getMovieDetails: () => {
    const url = "/movies?_page=1&_limit=1";
    return axiosClient.get(url);
  },

  postMovie: (newMovie) => {
    const url = `/movies`;
    return axiosClient.post(url, newMovie);
  },

  deleteMovie: (movieId) => {
    const url = `/movies/${movieId}`;
    return axiosClient.delete(url);
  },

  putMovie: (movieId, newMovie) => {
    const url = `/movies/${movieId}`;
    return axiosClient.put(url, newMovie);
  },
};

export default moviesApi;
