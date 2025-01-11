const API_KEY = "7f3bd972";
const BASE_URL = "https://www.omdbapi.com/";

export const fetchMovies = async (searchTerm, page = 1, type = "") => {
  const url = `${BASE_URL}?apikey=${API_KEY}&s=${searchTerm}&page=${page}&type=${type}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const fetchMovieDetails = async (id) => {
  const url = `${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
