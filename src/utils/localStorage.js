export const getFavorites = () => {
  try {
    return JSON.parse(localStorage.getItem('favoriteMovies')) || [];
  } catch (error) {
    console.error('Error reading favorites:', error);
    return [];
  }
};

export const saveFavorites = (favorites) => {
  try {
    localStorage.setItem('favoriteMovies', JSON.stringify(favorites));
  } catch (error) {
    console.error('Error saving favorites:', error);
  }
};