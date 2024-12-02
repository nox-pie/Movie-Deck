const API_KEY = 'f531333d637d0c44abc85b3e74db2186';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (page) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    const result = await response.json();
    return result.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

export const searchMovies = async (searchTerm) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?query=${searchTerm}&api_key=${API_KEY}&include_adult=false&language=en-US&page=1`
    );
    const result = await response.json();
    return result.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};