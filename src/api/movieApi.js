import axiosClient from "./axiosClient";

const movieApi = {
  getMovie: () => {
    const url = "/movies?_page=1&_limit=8";
    return axiosClient.get(url);
  },
};

export default movieApi;